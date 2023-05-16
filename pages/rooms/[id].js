import React from 'react';
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import { roomFetcher } from "@/fetchers";
import RoomEmpty from "@/components/RoomCardDetailed/RoomEmpty";
import RoomCardDetailed from "@/components/RoomCardDetailed/RoomCardDetailed";

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
            room: await roomFetcher(context.query.id)
        }
    }
}