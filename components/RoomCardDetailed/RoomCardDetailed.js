import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Flex,
    Heading,
    HStack,
    Text, Tooltip, VStack,
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
                        <TooltipIcon active={airConditioned} textTooltip={"Air condition"} icon={TbAirConditioning} />
                        <TooltipIcon active={hasProjector} textTooltip={"Projector"} icon={BsProjector} />
                        <TooltipIcon active={hasPhone} textTooltip={"Phone"} icon={AiOutlinePhone} />
                        <TooltipIcon active={hasWhiteboard} textTooltip={"White board"} icon={TfiBlackboard} />
                        <TooltipIcon active={hasPrinter} textTooltip={"Printer"} icon={AiOutlinePrinter} />
                        <TooltipIcon active={hasSoundSystem} textTooltip={"Sound system"} icon={RiSurroundSoundLine} />
                        <TooltipIcon active={wifiAccess} textTooltip={"Wifi"} icon={AiOutlineWifi} />
                        <TooltipIcon active={wheelchairAccessible} textTooltip={"Wheel chair"} icon={GrWheelchairActive} />
                        <TooltipIcon active={hasRefreshments} textTooltip={"Refreshments"} icon={MdFastfood} />
                    </HStack>

                </Flex>
            </CardHeader>

            <CardBody>
                <Container>
                    <Text>{description}</Text>
                    <VStack>
                        <Text>Layout: {layout}</Text>
                        <Text>Noise level: {noiseLevel}</Text>
                        <Text>Capacity: {capacity}</Text>
                    </VStack>
                </Container>
            </CardBody>

            <CardFooter>
                <MainButton href="/">Reserve</MainButton>
            </CardFooter>
        </Card>
    );
};

export default RoomCardDetailed;