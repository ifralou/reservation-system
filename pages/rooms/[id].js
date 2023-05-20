import React from 'react';
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import {roomByIdInfoFetcher} from "@/connectors/fetchers";
import RoomEmpty from "@/components/RoomCardDetailed/RoomEmpty";
import RoomCardDetailed from "@/components/RoomCardDetailed/RoomCardDetailed";

//localhost:3000/rooms/1

export default function RoomOverview({room}) {
    return (
        <SiteWrapper>
            {
                room ? <RoomCardDetailed room={room}/> : <RoomEmpty/>
            }
        </SiteWrapper>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            room: await roomByIdInfoFetcher(context.query.id)
        }
    }
}