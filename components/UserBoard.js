import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, Flex, Text, List, ListItem,
    useDisclosure, VStack, Spinner
} from "@chakra-ui/react";
import {useUser} from "@auth0/nextjs-auth0/client";
import {reservationsByUserFetcher} from "@/connectors/fetchers";
import CurrentUserReservation from "@/components/CurrentUserReservation/CurrentUserReservation";

const UserBoard = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()

    const {user, isLoading} = useUser();

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        reservationsByUserFetcher(user.email)
            .then(res => setReservations(res));
    }, []);

    const {
        email,
        emailVerified,
        name,
        nickname,
        picture
    } = user;

    return (
        <>
            {
                isLoading ?
                    <Spinner/> :
                    <Button ref={btnRef} colorScheme='green' onClick={onOpen} size="sm">
                        Board
                    </Button>

            }

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>

                    <DrawerHeader>
                        <Flex align="center" justify="space-around">
                            Hi, {nickname}!
                            <Avatar name={name} src={picture}/>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={3}>

                            <List spacing={1}>
                                <ListItem>
                                    Name: {name}
                                </ListItem>
                                <ListItem>
                                    Email: {email}
                                </ListItem>
                            </List>

                            <Text>
                                Reservations:
                            </Text>
                            <List>
                                {
                                    reservations.map(
                                        reservation => <CurrentUserReservation key={reservation.id}
                                                                               reservation={reservation}/>
                                    )
                                }
                            </List>

                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
};

export default UserBoard;