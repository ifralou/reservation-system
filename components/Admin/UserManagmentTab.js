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
    AccordionButton, AccordionPanel, ListItem, Box
} from "@chakra-ui/react";

const UserManagementTab = () => {
    const [users, setUsers] = useState({});

    console.log(users);

    useEffect(() => {
        fetch("/api/external/user")
            .then(res => res.json())
            .then(res => setUsers(res.users));
    }, []);

    return (
        <TabPanel>
            <Accordion>
                {
                    users && users.length && users.map(user => (
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
                                    <ListItem>
                                        Last known ip address: {user.lastIp}
                                    </ListItem>
                                    <ListItem>
                                       Last login date: {(new Date(Date.parse(user.lastLoginDate))).toLocaleDateString("en-GB")}
                                    </ListItem>
                                    <ListItem>
                                        Count of logins: {user.count}
                                    </ListItem>
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </TabPanel>
    );
};

export default UserManagementTab;