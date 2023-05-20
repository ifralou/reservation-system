import React, {useEffect, useState} from 'react';
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import {roomByIdInfoFetcher} from "@/connectors/fetchers";
import RoomCardDetailed from "@/components/RoomCardDetailed/RoomCardDetailed";
import {useRouter} from "next/router";
import Loader from "@/components/Loader/Loader";

//localhost:3000/rooms/1

export default function RoomOverview() {
    const router = useRouter();
    const [room, setRoom] = useState(null);

    useEffect(() => {
       roomByIdInfoFetcher(router.query.id)
           .then(res => setRoom(res))
    },[]);

    return (
        <SiteWrapper>
            {
                room ? <RoomCardDetailed room={room}/> : <Loader/>
            }
        </SiteWrapper>
    );
}
