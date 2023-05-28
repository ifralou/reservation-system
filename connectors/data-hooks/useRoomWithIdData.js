import React from 'react';
import useSWR from "swr";
import {defaultFetcher, useApi} from "@/connectors/fetchers";

const useRoomWithIdData = (roomId) => {
    const {data, error, isLoading} = useSWR(useApi(`/room/${roomId}`), defaultFetcher);
    return {roomData: data, roomStatus: {error, isLoading}}
};

export default useRoomWithIdData;