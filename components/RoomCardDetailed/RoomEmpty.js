import React from 'react';
import {Card, Flex, Heading} from "@chakra-ui/react";

const RoomEmpty = () => {
    return (
        <Card w="100%">
        <Flex height="400px" align="center" justify="center">
            <Heading>No room available</Heading>
        </Flex>
        </Card>
    );
};

export default RoomEmpty;