import React from 'react';
import {Heading, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import SiteWrapper from "@/components/SiteWrapper";

export default function RoomOverview({room}) {
    const router = useRouter();
    const id = router.query.id;

    return (
        <SiteWrapper>
            <Heading>Id for the room is {id}.</Heading>
        </SiteWrapper>
    );
}


export async function getServerSideProps(context) {
    return {
        props: {
            //TODO: user fetcher here
            room: {}
        }
    }
}
