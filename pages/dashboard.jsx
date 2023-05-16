import React from 'react';
import {useUser } from '@auth0/nextjs-auth0/client';
import { Grid, GridItem } from "@chakra-ui/react";
import RoomCard from "@/components/RoomCard";
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import {dashboardFetcher} from "@/fetchers";
import Loader from "@/components/Loader/Loader";


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

export async function getStaticProps(context) {
    return {
        props: {
            rooms: await dashboardFetcher()
        }
    }
}