import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react";
import RoomCard from "@/components/RoomCard";
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import Loader from "@/components/Loader/Loader";
import useDashboardData from "@/connectors/data-hooks/useDashboardData";


export default function Dashboard() {
    const {data, error, isLoading} = useDashboardData()

    if(error) {
        //TODO: handle here
        console.log(error)
    }

    return (
        <SiteWrapper>
            {
                isLoading?
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
                            data.map(room =>
                                <GridItem key={room.id}><RoomCard room={room}/></GridItem>
                            )
                        }
                    </Grid>
            }
        </SiteWrapper>
    )
};