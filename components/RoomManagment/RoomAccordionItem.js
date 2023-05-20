import React from 'react';
import { useState } from "react";
import {Heading, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
        Box, HStack, Text, Button, useToast} from "@chakra-ui/react";
import TooltipIcon from "@/components/RoomCardDetailed/TooltipIcon";
import {TbAirConditioning} from "react-icons/tb";
import {BsProjector} from "react-icons/bs";
import {AiOutlinePhone, AiOutlinePrinter, AiOutlineWifi} from "react-icons/ai";
import {TfiBlackboard} from "react-icons/tfi";
import {RiSurroundSoundLine} from "react-icons/ri";
import {GrWheelchairActive} from "react-icons/gr";
import {MdFastfood} from "react-icons/md";
import {roomEquipmentSendRefresh} from "@/connectors/fetchers";

function RoomAccordionItem({room}) {
    const [roomFeatures, setRoomFeatures] = useState(room.roomFeatures);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleTooltipIconClick = (feature) => {
        const updatedFeatures = roomFeatures.includes(feature)
            ? roomFeatures.filter((f) => f !== feature)
            : [...roomFeatures, feature];
        setRoomFeatures(updatedFeatures);
    };

    const handleSaveButtonClick = () => {
        setIsLoading(true);
        roomEquipmentSendRefresh(room.buildingId, room.id, roomFeatures).then((updatedFeatures) => {
            toast({
                title: "Saved",
                description: "Room features saved successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            setRoomFeatures(updatedFeatures)
        }).catch(() => {
            console.log(room.roomFeatures);
            toast({
                title: "Failed",
                description: "Error while saving new room features.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            setRoomFeatures(room.roomFeatures);
        });
        setIsLoading(false);
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
                <Heading as='h5' size='sm'>Available room features</Heading>
                <Text>Click on icons to change availability:</Text>
                <HStack paddingY='10px'>
                    <TooltipIcon
                        active={roomFeatures.includes("conditioning")}
                        textTooltip={"Air condition"}
                        icon={TbAirConditioning}
                        onClick={() => handleTooltipIconClick("conditioning")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("projector")}
                        textTooltip={"Projector"}
                        icon={BsProjector}
                        onClick={() => handleTooltipIconClick("projector")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("phone")}
                        textTooltip={"Phone"}
                        icon={AiOutlinePhone}
                        onClick={() => handleTooltipIconClick("phone")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("white")}
                        textTooltip={"White board"}
                        icon={TfiBlackboard}
                        onClick={() => handleTooltipIconClick("white")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("printer")}
                        textTooltip={"Printer"}
                        icon={AiOutlinePrinter}
                        onClick={() => handleTooltipIconClick("printer")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("sound")}
                        textTooltip={"Sound system"}
                        icon={RiSurroundSoundLine}
                        onClick={() => handleTooltipIconClick("sound")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("wifi")}
                        textTooltip={"Wifi"}
                        icon={AiOutlineWifi}
                        onClick={() => handleTooltipIconClick("wifi")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("accessiblility")}
                        textTooltip={"Wheel chair"}
                        icon={GrWheelchairActive}
                        onClick={() => handleTooltipIconClick("accessiblility")}
                    />
                    <TooltipIcon
                        active={roomFeatures.includes("refreshment")}
                        textTooltip={"Refreshments"}
                        icon={MdFastfood}
                        onClick={() => handleTooltipIconClick("refreshment")}
                    />
                </HStack>
                <Button
                    colorScheme='green'
                    size='sm'
                    isLoading={isLoading}
                    onClick={handleSaveButtonClick}
                >
                    Save
                </Button>
            </AccordionPanel>
        </AccordionItem>
    );
}


export default RoomAccordionItem;