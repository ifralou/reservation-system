import React from 'react';
import useSWR from "swr";
import {defaultFetcher, useApi} from "@/connectors/fetchers";

const useRoomsData = (
   buildingId
) => {
    let url = "/rooms";

    if(typeof buildingId == "number") {
        url = `${url}?buildingId=${buildingId}`;
    }

    console.log("useROOM id " + buildingId);
    console.log("useROOM " + url);
    const {data, error, isLoading} = useSWR(
        useApi(url),
        defaultFetcher
    );
    console.log(data);
    return {rooms: data, roomsStatus: {error, isLoading}};
};

export default useRoomsData;