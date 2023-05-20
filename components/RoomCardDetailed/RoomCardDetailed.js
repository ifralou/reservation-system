import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader, Code,
    Flex,
    Heading,
    HStack,
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
        id, buildingId,
        name, description,
        img, capacity, layout, noiseLevel,
        roomFeatures,
    } = room;

    return (
        <Card w="100%">
            <CardHeader>
                <Flex align="center" justify="space-between">

                    <Heading>{name}</Heading>

                    <HStack>
                        <TooltipIcon active={true} textTooltip={"Air condition"} icon={TbAirConditioning}/>
                        <TooltipIcon active={true} textTooltip={"Projector"} icon={BsProjector}/>
                        <TooltipIcon active={false} textTooltip={"Phone"} icon={AiOutlinePhone}/>
                        <TooltipIcon active={false} textTooltip={"White board"} icon={TfiBlackboard}/>
                        <TooltipIcon active={true} textTooltip={"Printer"} icon={AiOutlinePrinter}/>
                        <TooltipIcon active={true} textTooltip={"Sound system"} icon={RiSurroundSoundLine}/>
                        <TooltipIcon active={true} textTooltip={"Wifi"} icon={AiOutlineWifi}/>
                        <TooltipIcon active={false} textTooltip={"Wheel chair"}
                                     icon={GrWheelchairActive}/>
                        <TooltipIcon active={false} textTooltip={"Refreshments"} icon={MdFastfood}/>
                    </HStack>

                </Flex>
            </CardHeader>


            <CardBody>
                <Code children={JSON.stringify(room, null, "\t")}>
                </Code>
            </CardBody>

            <CardFooter>
                <MainButton href="/">Reserve</MainButton>
            </CardFooter>
        </Card>
    );
};

export default RoomCardDetailed;