import React from 'react';
import {
    Flex,
    Heading,
    Tab,
    TabList,
    TabPanels,
    Tabs,
    VStack
} from "@chakra-ui/react";
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import RoomManagmentTab from "@/components/Admin/RoomManagementTab";
import UserManagmentTab from "@/components/Admin/UserManagmentTab";




export default function Admin() {

    return (
        <SiteWrapper>
            <VStack w="100%">
                <Flex>
                    <Heading>Admin Dashboard</Heading>
                </Flex>


                <Tabs w="100%">

                    <TabList>
                        <Tab>Room managment</Tab>
                        <Tab>Pidornut Users</Tab>
                    </TabList>

                    <TabPanels>
                        <RoomManagmentTab/>
                        <UserManagmentTab/>
                    </TabPanels>

                </Tabs>

            </VStack>
        </SiteWrapper>
    );
};
