import React from 'react';
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Text} from "@chakra-ui/react";
import TooltipIcon from "@/components/RoomCardDetailed/TooltipIcon";
import {TbAirConditioning} from "react-icons/tb";
import {BsProjector} from "react-icons/bs";
import {AiOutlinePhone, AiOutlinePrinter, AiOutlineWifi} from "react-icons/ai";
import {TfiBlackboard} from "react-icons/tfi";
import {RiSurroundSoundLine} from "react-icons/ri";
import {GrWheelchairActive} from "react-icons/gr";
import {MdFastfood} from "react-icons/md";

function RoomAccordionItem({room}) {
    const setRoomFeatures = (updatedFeatures) => {
        room.roomFeatures = updatedFeatures;
    };

    const handleTooltipIconClick = (feature) => {
        const updatedFeatures = room.roomFeatures.includes(feature)
            ? room.roomFeatures.filter((f) => f !== feature)
            : [...room.roomFeatures, feature];
        setRoomFeatures(updatedFeatures);
    };

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text>{room.name}</Text>
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <HStack>
                    <TooltipIcon
                        active={room.roomFeatures.includes("conditioning")}
                        textTooltip={"Air condition"}
                        icon={TbAirConditioning}
                        onClick={() => handleTooltipIconClick("conditioning")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("projector")}
                        textTooltip={"Projector"}
                        icon={BsProjector}
                        onClick={() => handleTooltipIconClick("projector")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("phone")}
                        textTooltip={"Phone"}
                        icon={AiOutlinePhone}
                        onClick={() => handleTooltipIconClick("phone")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("white")}
                        textTooltip={"White board"}
                        icon={TfiBlackboard}
                        onClick={() => handleTooltipIconClick("white")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("printer")}
                        textTooltip={"Printer"}
                        icon={AiOutlinePrinter}
                        onClick={() => handleTooltipIconClick("printer")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("sound")}
                        textTooltip={"Sound system"}
                        icon={RiSurroundSoundLine}
                        onClick={() => handleTooltipIconClick("sound")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("wifi")}
                        textTooltip={"Wifi"}
                        icon={AiOutlineWifi}
                        onClick={() => handleTooltipIconClick("wifi")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("accessiblility")}
                        textTooltip={"Wheel chair"}
                        icon={GrWheelchairActive}
                        onClick={() => handleTooltipIconClick("accessiblility")}
                    />
                    <TooltipIcon
                        active={room.roomFeatures.includes("refreshment")}
                        textTooltip={"Refreshments"}
                        icon={MdFastfood}
                        onClick={() => handleTooltipIconClick("refreshment")}
                    />
                </HStack>
            </AccordionPanel>
        </AccordionItem>
    );
}

export default RoomAccordionItem;