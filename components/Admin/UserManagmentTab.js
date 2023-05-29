import React, {useEffect, useState} from 'react';
import {
    Text,
    TabPanel,
    ListIcon,
    List,
    Accordion,
    AccordionItem,
    HStack,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    ListItem,
    Box,
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton, PopoverHeader, PopoverBody, VStack, Input
} from "@chakra-ui/react";
import DeleteFlow from "@/components/Admin/DeleteFlow/DeleteFlow";
import Loader from "@/components/Loader/Loader";



const UserManagementTab = () => {
    const [users, setUsers] = useState({});

    const getUsers = async () => {
        fetch("/api/external/user")
            .then(res => res.json())
            .then(res => setUsers(res.users));
    };

    console.log(users);


    useEffect(() => {
       getUsers();
    }, []);

    const deleteUserById = (id) =>
        () => fetch(`/api/external/delete?id=${id}`, {
            method: "POST",
            body: JSON.stringify({
                id: id
            })
        }).then(res => {
           getUsers()
        })


    return (
        <TabPanel>
            <Accordion>
                {
                    users && users.length ? users.map(user => (
                        <AccordionItem key={user.email}>
                            <h2>
                                <AccordionButton>
                                    <HStack flex='1' textAlign='left'>
                                        <Text>{user.name}</Text>
                                        <Text>{user.email}</Text>
                                    </HStack>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <List>
                                    <HStack justify="space-between">

                                        <Box>

                                            <ListItem>
                                                Last known ip address: {user.lastIp}
                                            </ListItem>
                                            <ListItem>
                                                Last login
                                                date: {(new Date(Date.parse(user.lastLoginDate))).toLocaleDateString("en-GB")}
                                            </ListItem>
                                            <ListItem>
                                                Count of logins: {user.count}
                                            </ListItem>

                                        </Box>

                                        <DeleteFlow disable={user && user.roles.includes("Baned")} deleteControl={user.name} deleteAction={deleteUserById(user.id)}/>

                                    </HStack>
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    )) : <Loader/>
                }
            </Accordion>
        </TabPanel>
    );
};

export default UserManagementTab;