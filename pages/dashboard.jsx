import React from 'react';
import {useUser, withPageAuthRequired} from '@auth0/nextjs-auth0/client';
import {Box, Grid, GridItem, Heading, Spinner, Stack, Text} from "@chakra-ui/react";
import Head from "next/head";
import CustomGrid from "@/components/CustomGrid";
import Navigation from "@/components/Navigation/Navigation";
import RoomCard from "@/components/RoomCard";
import SiteWrapper from "@/components/SiteWrapper";
import {dashboardFetcher} from "@/fetchers";
import Loader from "@/components/Loader";


export default function Dashboard({rooms}) {
    const user= useUser();

    return (
        <SiteWrapper>
            {
                user.isLoading ?
                    <Loader/> :

                    <Grid
                        templateColumns={{
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            xl: "repeat(4, 1fr)",
                        }}
                        templateRows="repeat(6, 1fr)"
                        gap={5}
                    >
                        {
                            rooms.map(room =>
                                <GridItem key={room.id}>
                                    <RoomCard room={room}/>
                                </GridItem>
                            )
                        }
                    </Grid>
            }
        </SiteWrapper>
    )
};

export async function getServerSideProps(context) {
    return {
        props: {
            rooms: await dashboardFetcher(context)
        }
    }
}