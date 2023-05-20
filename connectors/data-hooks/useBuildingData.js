import React from 'react';
import useSWR from "swr";
import {defaultFetcher, useApi} from "@/connectors/fetchers";

const useBuildingData = () => {
    const {data, error, isLoading} = useSWR(useApi("/buildings"), defaultFetcher);
    return {buildingsSelectRange: data, buildingsSelectRangeStatus:{ error, isLoading }};
};

export default useBuildingData;