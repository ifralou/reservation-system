import {useState} from "react";
import useSWR from "swr";
import {dashboardFetcher, defaultFetcher, useApi} from "@/connectors/fetchers";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export default function useDashboardData(currentPage) {
    const {data , error, isLoading} = useSWR(
        useApi(`/dashboard?pageNo=${currentPage}`),
        defaultFetcher
    );

    console.log("RESPONSE");
    console.log(data);
    return {
        data:{
            roomsForDashboard: data?.objectList || [],
            currentPage: data?.currentPage || 0,
            totalPages: data?.totalPageCount || 0
        },
        error,
        isLoading
    };
}