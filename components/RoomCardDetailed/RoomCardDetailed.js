import React from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Flex,
    Heading,
    HStack,
    RangeSlider,
    RangeSliderFilledTrack, RangeSliderMark,
    RangeSliderThumb,
    RangeSliderTrack,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
    VStack,
} from "@chakra-ui/react";
import {BsProjector} from "react-icons/bs";
import {TfiBlackboard} from "react-icons/tfi";
import {AiOutlinePhone, AiOutlinePrinter, AiOutlineWifi} from "react-icons/ai";
import {RiSurroundSoundLine} from "react-icons/ri";
import {GrWheelchairActive} from "react-icons/gr";
import {MdFastfood} from "react-icons/md";
import TooltipIcon from "@/components/RoomCardDetailed/TooltipIcon";
import {TbAirConditioning} from "react-icons/tb";
import MainButton from "@/components/MainButton";

const ranges = [
    [0, "8:00"],
    [1, "8:30"],
    [2, "9:00"],
    [3, "9:30"],
    [4, "10:00"],
    [5, "10:30"],
    [6, "11:00"],
    [7, "11:30"],
    [8, "12:00"],
    [9, "12:30"],
    [10, "13:00"],
    [11, "13:30"],
    [12, "14:00"],
    [13, "14:30"],
    [14, "15:00"],
    [15, "15:30"],
    [16, "16:00"],
    [17, "16:30"],
    [18, "17:00"]
];

const RoomCardDetailed = ({room}) => {

    let {
        id, name, description,
        img, capacity, layout, noiseLevel,
        airConditioned, hasProjector, hasWhiteboard, hasPrinter,
        hasSoundSystem, wifiAccess, hasPhone, wheelchairAccessible,
        hasRefreshments
    } = room;

    return (
        <Card w="100%">
            <CardHeader>
                <Flex align="center" justify="space-between">

                    <Heading>{name}</Heading>

                    <HStack>
                        <TooltipIcon active={airConditioned} textTooltip={"Air condition"} icon={TbAirConditioning}/>
                        <TooltipIcon active={hasProjector} textTooltip={"Projector"} icon={BsProjector}/>
                        <TooltipIcon active={hasPhone} textTooltip={"Phone"} icon={AiOutlinePhone}/>
                        <TooltipIcon active={hasWhiteboard} textTooltip={"White board"} icon={TfiBlackboard}/>
                        <TooltipIcon active={hasPrinter} textTooltip={"Printer"} icon={AiOutlinePrinter}/>
                        <TooltipIcon active={hasSoundSystem} textTooltip={"Sound system"} icon={RiSurroundSoundLine}/>
                        <TooltipIcon active={wifiAccess} textTooltip={"Wifi"} icon={AiOutlineWifi}/>
                        <TooltipIcon active={wheelchairAccessible} textTooltip={"Wheel chair"}
                                     icon={GrWheelchairActive}/>
                        <TooltipIcon active={hasRefreshments} textTooltip={"Refreshments"} icon={MdFastfood}/>
                    </HStack>

                </Flex>
            </CardHeader>

            <CardBody>
                <Flex justifyContent="space-between">

                    <Container flexGrow={3}>
                        <Text>{description}</Text>
                        <VStack spacing={4} m={4}>
                            <Text>Layout: {layout}</Text>
                            <Text>Noise level: {noiseLevel}</Text>
                            <Text>Capacity: {capacity}</Text>
                        </VStack>
                    </Container>
                    <Flex flexGrow={1} justifyContent="center">

                        <RangeSlider defaultValue={[0, 19]} min={0} max={19} step={1} orientation={"vertical"}
                                     minH="700" isReversed>

                            <RangeSliderTrack bg='red.100'>
                                <RangeSliderFilledTrack bg='green'/>
                            </RangeSliderTrack>
                            <RangeSliderThumb boxSize={3} index={0}/>
                            <RangeSliderThumb boxSize={3} index={1}/>

                        </RangeSlider>

                        <RangeSlider isDisabled defaultValue={[0, 19]} min={0} max={19} step={1}
                                     orientation={"vertical"} minH="700" isReversed>

                            {
                                ranges.map(([interval, time]) => <RangeSliderMark p={1}
                                                                                  value={interval}>{time}</RangeSliderMark>)
                            }

                            <RangeSliderTrack bg='red.100'>
                                <RangeSliderFilledTrack bg='green'/>
                            </RangeSliderTrack>
                            <RangeSliderThumb boxSize={0} index={0}/>
                            <RangeSliderThumb boxSize={0} index={1}/>


                        </RangeSlider>
                    </Flex>
                </Flex>
            </CardBody>

            <CardFooter>
                <MainButton href="/">Reserve</MainButton>
            </CardFooter>
        </Card>
    );
};

export default RoomCardDetailed;