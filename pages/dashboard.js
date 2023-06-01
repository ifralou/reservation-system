import React, {useState} from 'react';
import {Box, Button, Grid, GridItem, HStack, VStack} from "@chakra-ui/react";
import RoomCard from "@/components/RoomCard";
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import Loader from "@/components/Loader/Loader";
import useDashboardData from "@/connectors/data-hooks/useDashboardData";
import MainButton from "@/components/MainButton";
import {Main} from "next/document";


export default function Dashboard() {
    const [currentPage, setCurrenPage] = useState(0);

    const {data, error, isLoading} = useDashboardData(currentPage);


    if (error) {
        //TODO: handle here
        console.log(error)
    }

    return (
        <SiteWrapper>

            {
                !data || isLoading ?
                    <Loader/> :

                    <VStack>

                        <Grid
                            templateColumns={{
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                xl: "repeat(4, 1fr)",
                            }}
                            templateRows="repeat(4, 1fr)"
                            gap={5}
                        >
                            {
                                data.roomsForDashboard.map(room =>
                                    <GridItem key={room.id}><RoomCard room={room}/></GridItem>
                                )
                            }
                        </Grid>

                        <HStack>
                            <Button isDisabled={currentPage <= 0} colorScheme="green" size={"lg"} onClick={() => setCurrenPage(page => page - 1)}>
                                Prev
                            </Button>
                            <Button isActive variant={"outlined"} href={"#"}>
                                {currentPage + 1}
                            </Button>
                            <Button isDisabled={currentPage > data.totalPages - 2} colorScheme="green" size={"lg"} onClick={() => setCurrenPage(page => page + 1)}>
                                Next
                            </Button>
                        </HStack>

                    </VStack>
            }

        </SiteWrapper>
    )
};