import React from 'react';
import {Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, VStack} from "@chakra-ui/react";
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";

export default function Admin() {

    return (
        <SiteWrapper>
            <VStack w="100%">
                <Flex>
                    <Heading>Admin Dashboard</Heading>
                </Flex>

                <Tabs w="100%">

                    <TabList>
                        <Tab>Rooms</Tab>
                        <Tab>Users</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            Room managment things.
                        </TabPanel>

                        <TabPanel>
                            User managment things.
                        </TabPanel>
                    </TabPanels>

                </Tabs>

            </VStack>
        </SiteWrapper>
    );
};
