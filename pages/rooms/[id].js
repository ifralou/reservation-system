import React, {useEffect, useState} from 'react';
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import {roomByIdInfoFetcher} from "@/connectors/fetchers";
import RoomCardDetailed from "@/components/RoomCardDetailed/RoomCardDetailed";
import {useRouter} from "next/router";
import Loader from "@/components/Loader/Loader";
import useRoomWithIdData from "@/connectors/data-hooks/useRoomWithIdData";

//localhost:3000/rooms/1

export default function RoomOverview() {
    const router = useRouter();
    const {roomData, roomStatus} = useRoomWithIdData(router.query.id)

    const room = roomData;
    if(roomStatus.error) {
       return <SiteWrapper>
          <div>
              Error occured.
          </div>
       </SiteWrapper>
    }

    return (
        <SiteWrapper>
            {
                !roomStatus.isLoading? <RoomCardDetailed room={room}/> : <Loader/>
            }
        </SiteWrapper>
    );
}
