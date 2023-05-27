import React, {useState} from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    HStack,
    Select, 
    List,
    ListItem, 
    ListIcon, 
    Text,
    Box
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
import { Divider } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

const checkNoiseLevel = (noiseLevel) => {
    return noiseLevel == "low" ? "red" : "green"; 
}

const RoomCardDetailed = ({room}) => {

    const timeStart = [
        {label: "Select start time", value: 0},
        {label: "8:00", value: 1},
        {label: "8:15", value: 2},
        {label: "8:30", value: 3},
        {label: "8:45", value: 4},
        {label: "9:00", value: 5},
        {label: "9:15", value: 6},
        {label: "9:30", value: 7},
        {label: "9:45", value: 8},
        {label: "10:00", value: 9},
        {label: "10:15", value: 10},
        {label: "10:30", value: 11},
        {label: "10:45", value: 12},
        {label: "11:00", value: 13},
        {label: "11:15", value: 14},
        {label: "11:30", value: 15},
        {label: "11:45", value: 16},
        {label: "12:00", value: 17},
        {label: "12:15", value: 18},
        {label: "12:30", value: 19},
        {label: "12:45", value: 20},
        {label: "13:00", value: 21},
        {label: "13:15", value: 22},
        {label: "13:30", value: 23},
        {label: "13:45", value: 24},
        {label: "14:00", value: 25},
        {label: "14:15", value: 26},
        {label: "14:30", value: 27},
        {label: "14:45", value: 28},
        {label: "15:00", value: 29},
        {label: "15:15", value: 30},
        {label: "15:30", value: 31},
        {label: "15:45", value: 32},
        {label: "16:00", value: 33},
        {label: "16:15", value: 34},
        {label: "16:30", value: 35},
        {label: "16:45", value: 36},
    ]

    const timeEnd = [
        {label: "Select end time", value: 0},
        {label: "8:00", value: 1},
        {label: "8:15", value: 2},
        {label: "8:30", value: 3},
        {label: "8:45", value: 4},
        {label: "9:00", value: 5},
        {label: "9:15", value: 6},
        {label: "9:30", value: 7},
        {label: "9:45", value: 8},
        {label: "10:00", value: 9},
        {label: "10:15", value: 10},
        {label: "10:30", value: 11},
        {label: "10:45", value: 12},
        {label: "11:00", value: 13},
        {label: "11:15", value: 14},
        {label: "11:30", value: 15},
        {label: "11:45", value: 16},
        {label: "12:00", value: 17},
        {label: "12:15", value: 18},
        {label: "12:30", value: 19},
        {label: "12:45", value: 20},
        {label: "13:00", value: 21},
        {label: "13:15", value: 22},
        {label: "13:30", value: 23},
        {label: "13:45", value: 24},
        {label: "14:00", value: 25},
        {label: "14:15", value: 26},
        {label: "14:30", value: 27},
        {label: "14:45", value: 28},
        {label: "15:00", value: 29},
        {label: "15:15", value: 30},
        {label: "15:30", value: 31},
        {label: "15:45", value: 32},
        {label: "16:00", value: 33},
        {label: "16:15", value: 34},
        {label: "16:30", value: 35},
        {label: "16:45", value: 36},
    ]

    const [startTime, setStartTime] = React.useState(null);

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

            

            <CardBody >

                <List spacing={3}>
                    
                    <HStack align="center" justify="space-around">
                        <ListItem>
                            <ListIcon as={MdCheckCircle}  color='green.500' />
                            Room ID: {id}
                        </ListItem>

                        <ListItem>
                            <ListIcon as={MdCheckCircle}  color='green.500' />
                            Building ID: {buildingId}
                        </ListItem>
                    </HStack>
                    
                    <HStack align="center"  justify="space-around">
                        <ListItem>
                            <ListIcon as={MdCheckCircle}  color='green.500' />
                            Name: {name}
                        </ListItem>
                    
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Capacity: {capacity}
                        </ListItem>

                    </HStack>


                    <HStack align="center"  justify="space-around">
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Layout: {layout}
                        </ListItem>

                        <ListItem >                            
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Noise Level: <Text as="span" color={checkNoiseLevel(noiseLevel)}>{noiseLevel}</Text>
                        </ListItem>

                    </HStack>

                    <Divider orientation='horizontal' />
                    
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Description: {description}
                    </ListItem>

                    <Divider orientation='horizontal' />

                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Image Room: {img}
                    </ListItem>

                    <Divider orientation='horizontal' />

                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Features: {roomFeatures}
                    </ListItem>


                </List>

                

                <Flex mt={5} justify="space-between" >
                <Select>
                    {timeStart.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </Select>
                <Select>
                    {timeEnd.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </Select>
            
                </Flex>
            </CardBody>

            <CardFooter>
                <MainButton href="/">Reserve</MainButton>
            </CardFooter>
            
        </Card>
    );
};

export default RoomCardDetailed;