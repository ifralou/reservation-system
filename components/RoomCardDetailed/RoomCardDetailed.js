import React, {useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    Flex, FormControl, FormLabel,
    Heading,
    HStack, Icon,
    Input, InputGroup, InputRightElement,
    Select, Spacer,
    Text,
    useToast
} from "@chakra-ui/react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {BsProjector} from "react-icons/bs";
import {TfiBlackboard} from "react-icons/tfi";
import {AiOutlinePhone, AiOutlinePrinter, AiOutlineWifi} from "react-icons/ai";
import {RiSurroundSoundLine} from "react-icons/ri";
import {GrWheelchairActive} from "react-icons/gr";
import {MdFastfood} from "react-icons/md";
import TooltipIcon from "@/components/RoomCardDetailed/TooltipIcon";
import {TbAirConditioning} from "react-icons/tb";
import {fetchExistingReservations, sendSaveReservation} from "@/connectors/fetchers";
import {FaAngleDown} from "react-icons/fa";

const RoomCardDetailed = ({room}) => {
    const [date, setDate] = useState(null);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [reservedTimeSlots, setReservedTimeSlots] = useState([]);
    const toast = useToast();

    const minSelectableDate = new Date(); // minimal selectable date is today

    const handleCreateReservation = (date, start, end) => {
        sendSaveReservation(date, start, end).then(() => {
            toast({
                title: "Saved",
                description: "Reservation created successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }).catch(() => {
            toast({
                title: "Failed",
                description: "Error while creating the reservation.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        })
    }

    const handleDateChange = (date) => {
        setDate(date);
        fetchExistingReservations(date).then((takenSlots) => {
            setReservedTimeSlots(takenSlots);
        }).catch(() => {
            toast({
                title: "Failed",
                description: "Error while fetching existing reservations.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        })
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const endTimeLaterThanStart = (endString, startString) => {
        return new Date(`1970-01-01T${endString}`) > new Date(`1970-01-01T${startString}`)
    }

    const generateTimeSlots = (forStartTime) => {
        const timeSlots = [];

        let currentTime = new Date();
        currentTime.setHours(8, 0, 0, 0);
        const endTime = new Date();
        endTime.setHours(20, 0, 0, 0);

        while (currentTime <= endTime) {
            const timeString = currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });

            // If generating start time slots, add everything except reserved slots
            if (forStartTime && !reservedTimeSlots.includes(timeString)) {
                timeSlots.push(
                    <option key={timeString} value={timeString}>
                        {timeString}
                    </option>
                );
            }

            // If generating end time slots, it should be:
            // 1. Later than start
            // 2. Not later than the closest existing reservation
            if (!forStartTime && endTimeLaterThanStart(timeString, startTime)) {
                if (reservedTimeSlots.includes(timeString)) {
                    break;
                }

                timeSlots.push(
                    <option key={timeString} value={timeString}>
                        {timeString}
                    </option>
                );
            }

            currentTime.setMinutes(currentTime.getMinutes() + 15);
        }

        return timeSlots;
    };

    const CustomDatePickerInput = React.forwardRef(({value, onClick}, ref) => (
        <InputGroup>
            <Input
                value={value}
                onClick={onClick}
                ref={ref}
                placeholder="Select Date"
                readOnly
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                _hover={{borderColor: "gray.400"}}
                _focus={{outline: "none", boxShadow: "outline"}}
                cursor="pointer"
                paddingRight="2.5rem" // Adjust the padding here
            />
            <InputRightElement pointerEvents="none" top="50%" transform="translateY(-50%)">
                <Icon as={FaAngleDown} color="gray.500"/>
            </InputRightElement>
        </InputGroup>
    ));

    let {
        id, buildingId,
        name, description,
        img, capacity, layout, noiseLevel,
        roomFeatures,
    } = room;

    return (
        <Card width="100%">
            <CardBody>
                <Heading size="2xl" paddingBottom="4" textAlign="center">
                    {name}
                </Heading>

                <Text mt={5} fontSize='xl' paddingBottom='4' fontStyle='italic'>{description}</Text>

                <HStack justify='space-between'>
                    <HStack spacing={5}>
                        <Flex direction="column" align="center">
                            <Text fontSize="lg" textAlign="center">
                                <Text fontSize="lg" as="span" fontWeight="bold">Capacity:</Text>{" "}{capacity}
                            </Text>
                        </Flex>
                        <Flex direction="column" align="center">
                            <Text fontSize="lg" textAlign="center">
                                <Text fontSize="lg" as="span" fontWeight="bold">Layout:</Text>{" "}{layout}
                            </Text>
                        </Flex>
                        <Flex direction="column" align="center">
                            <Text fontSize="lg" textAlign="center">
                                <Text fontSize="lg" as="span" fontWeight="bold">Noise Level:</Text>{" "}{noiseLevel}
                            </Text>
                        </Flex>
                    </HStack>

                    <Flex wrap="wrap" align="start">
                        <TooltipIcon
                            active={roomFeatures.includes("conditioning")}
                            textTooltip="Air Condition"
                            icon={TbAirConditioning}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("projector")}
                            textTooltip="Projector"
                            icon={BsProjector}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("phone")}
                            textTooltip="Phone"
                            icon={AiOutlinePhone}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("white")}
                            textTooltip="Whiteboard"
                            icon={TfiBlackboard}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("printer")}
                            textTooltip="Printer"
                            icon={AiOutlinePrinter}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("sound")}
                            textTooltip="Sound System"
                            icon={RiSurroundSoundLine}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("wifi")}
                            textTooltip="Wi-Fi"
                            icon={AiOutlineWifi}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("accessibility")}
                            textTooltip="Wheelchair Accessible"
                            icon={GrWheelchairActive}
                            margin={2}
                        />
                        <TooltipIcon
                            active={roomFeatures.includes("refreshment")}
                            textTooltip="Refreshments"
                            icon={MdFastfood}
                            margin={2}
                        />
                    </Flex>
                </HStack>

                <Card width="100%">
                    <CardBody>
                        <Heading size="lg" paddingBottom="4">
                            Make Reservation
                        </Heading>
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <DatePicker
                                selected={date}
                                onChange={handleDateChange}
                                dateFormat="MMMM d, yyyy"
                                customInput={<CustomDatePickerInput/>}
                                minDate={minSelectableDate}
                                width="100%"
                            />
                        </FormControl>
                        <Spacer height="2"/>
                        <FormControl>
                            <FormLabel>From</FormLabel>
                            <Select
                                value={startTime}
                                onChange={handleStartTimeChange}
                                placeholder="Select Start Time"
                                isDisabled={!date}
                                width="100%"
                            >
                                {generateTimeSlots(true)}
                            </Select>
                        </FormControl>
                        <Spacer height="2"/>
                        <FormControl>
                            <FormLabel>To</FormLabel>
                            <Select
                                value={endTime}
                                onChange={handleEndTimeChange}
                                placeholder="Select End Time"
                                isDisabled={!date || !startTime}
                                width="100%"
                            >
                                {generateTimeSlots(false)}
                            </Select>
                        </FormControl>
                        <Flex justifyContent="center">
                            <Button
                                colorScheme="green"
                                marginTop="4"
                                onClick={() => handleCreateReservation(date, startTime, endTime)}
                            >
                                Create
                            </Button>
                        </Flex>

                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    );
};

export default RoomCardDetailed;