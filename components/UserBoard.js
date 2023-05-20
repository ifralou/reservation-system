import React, {useEffect, useState} from 'react';

import {
    Avatar,
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, Flex, Text, List, ListItem,
    useDisclosure, VStack, Spinner, Heading, useToast
} from "@chakra-ui/react";
import {useUser} from "@auth0/nextjs-auth0/client";
import {cancelReservationSend, reservationsByUserFetcher} from "@/connectors/fetchers";
import CurrentUserReservation from "@/components/CurrentUserReservation/CurrentUserReservation";
import RemoveReservationConfirmationModal
    from "@/components/CurrentUserReservation/RemoveReservationConfirmationModal";

const UserBoard = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()
    const {user, isLoading} = useUser();
    const [isRemoveReservationModalOpen, setIsRemoveReservationModalOpen] = useState(false);
    const [reservationToRemove, setReservationToRemove] = useState(null);
    const [reservations, setReservations] = useState([]);
    const toast = useToast();

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

    const handleRemoveReservationConfirmation = (reservation) => {
        console.log(reservation);
        setReservationToRemove(reservation);
        setIsRemoveReservationModalOpen(true);
    };

    const handleRemoveReservation = () => {
        cancelReservationSend(reservationToRemove.id).then((cancelledReservation) => {
            const updatedReservations = reservations.filter((reservation) => reservation.id !== cancelledReservation.id);
            setReservations(updatedReservations);
            setIsRemoveReservationModalOpen(false);
            setReservationToRemove(null);
            toast({
                title: "Cancelled",
                description: "Reservation was successfully cancelled.",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }).catch(() => {
            toast({
                title: "Failed",
                description: "Error occurred while cancelling the reservation.",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        })
    };

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
                size='sm'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>

                    <DrawerHeader>
                        <Flex align="center" justify='space-evenly' size='lg'>
                            Hi, {nickname}!
                            <Avatar name={name} src={picture} size='lg'/>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={3}>

                            <List spacing={1} paddingY='10px'>
                                <ListItem>
                                    <Text fontWeight='Bold' size='md' display='inline'>Name: </Text>
                                    <Text display='inline'>{name}</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight='Bold' size='md' display="inline">Email: </Text>
                                    <Text display='inline'>{email}</Text>
                                </ListItem>
                            </List>

                            <Heading as='h5' size='md'>Reservations</Heading>
                            <List>
                                {
                                    reservations.map(reservation => (
                                        <CurrentUserReservation
                                            key={reservation.id}
                                            reservation={reservation}
                                            onRemove={handleRemoveReservationConfirmation}
                                        />
                                    ))
                                }
                            </List>

                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>

            {isRemoveReservationModalOpen && (
                <RemoveReservationConfirmationModal
                    onClose={() => setIsRemoveReservationModalOpen(false)}
                    onConfirm={() => handleRemoveReservation()}
                />
            )}
        </>
    )
};

export default UserBoard;