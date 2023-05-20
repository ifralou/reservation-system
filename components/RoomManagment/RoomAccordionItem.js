import React from 'react';
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text} from "@chakra-ui/react";

const RoomAccordionItem = ({room}) => {

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text>{room.name}</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>

                <Text>
                    Some text here
                </Text>
                <Text>
                    Some text there
                </Text>

            </AccordionPanel>
        </AccordionItem>
    );
};


export default RoomAccordionItem;