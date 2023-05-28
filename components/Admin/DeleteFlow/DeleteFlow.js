import React, {useState} from 'react';
import {
    Button, HStack, Input,
    Popover, Text,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger, VStack
} from "@chakra-ui/react";

const DeleteFlow = ({deleteControl, deleteAction}) => {
    const [input, setInput] = useState("");
    const [buttonActive, setButtonActive] = useState(false);

    const onInputChange = (e) => {
       const content = e.target.value;
       setButtonActive(content === deleteControl)
       setInput(content);
    };

    const onDeleteSubmit = () => {
        setButtonActive(false);
        setInput("");
        deleteAction();
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Button colorScheme="red" py={2}>Delete</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow/>
                <PopoverCloseButton/>
                <PopoverHeader>
                    Are you absolutely sure?
                </PopoverHeader>
                <PopoverBody>
                    <VStack>
                        <Text>Please input name of a user to confirm deletion.</Text>
                        <HStack>
                            <Input value={input} onChange={onInputChange}/>
                            <Button isDisabled={!buttonActive} colorScheme="green" onClick={onDeleteSubmit}>Submit</Button>
                        </HStack>
                    </VStack>
                </PopoverBody>
            </PopoverContent>

        </Popover>

    );
};

export default DeleteFlow;