import React from 'react';
import {Container, ListItem} from "@chakra-ui/react";

const CurrentUserReservation = ({reservation}) => {

    return (
        <ListItem>
            <Container>
                {JSON.stringify(reservation)}
            </Container>
        </ListItem>
    );
};

export default CurrentUserReservation;