import React from 'react';
import {ListItem, Text, Flex, Box, IconButton} from "@chakra-ui/react";
import { format } from 'date-fns';
import { FaTimes } from 'react-icons/fa';

const CurrentUserReservation = ({reservation, onRemove}) => {
    const formattedFrom = format(new Date(reservation.from), 'MMMM dd, yyyy HH:mm');
    const formattedTo = format(new Date(reservation.to), 'MMMM dd, yyyy HH:mm');

    return (
        <ListItem paddingY='10px'>
            <Flex alignItems="center">
                <Box>
                    <Text fontSize="lg" fontWeight="bold">{reservation.roomName}</Text>
                    <Text fontSize="sm" color="gray.500">{formattedFrom} - {formattedTo}</Text>
                </Box>
                <IconButton
                    icon={<FaTimes />}
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => onRemove(reservation)}
                    aria-label='Remove'
                    ml={2}/>
            </Flex>
        </ListItem>
    );
};

export default CurrentUserReservation;