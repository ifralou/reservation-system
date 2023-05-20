import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";

const RemoveReservationConfirmationModal = ({ onClose, onConfirm }) => {
    return (
        <Modal isOpen onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>Are you sure you want to cancel this reservation?</ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    <Button colorScheme="red" onClick={onConfirm}>Confirm</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default RemoveReservationConfirmationModal;
