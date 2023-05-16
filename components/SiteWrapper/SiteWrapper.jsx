import React from 'react';
import Head from "next/head";
import CustomGrid from "@/components/SiteWrapper/CustomGrid";
import {GridItem} from "@chakra-ui/react";
import Navigation from "@/components/Navigation/Navigation";

const SiteWrapper = ({children}) => {
    return (
        <>
            <Head>
                <title>Meeter</title>
                <meta name="description" content="Reservation rooms madness."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <CustomGrid>
                <GridItem as={"header"} area={"header"}>
                    <Navigation/>
                </GridItem>

                <GridItem py={5} as={"main"} area={"main"} display={"flex"} alignItems="center" justifyContent="center">
                    {children}
                </GridItem>

                <GridItem as={"footer"} area={"footer"}>

                </GridItem>
            </CustomGrid>
        </>
    );
};

export default SiteWrapper;