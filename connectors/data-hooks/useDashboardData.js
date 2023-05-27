import {useState} from "react";
import useSWR from "swr";
import {dashboardFetcher, defaultFetcher, useApi} from "@/connectors/fetchers";

export default function useDashboardData(currentPage) {
    const {data, error, isLoading} = useSWR(
        useApi(`/dashboard/${currentPage}`),
        defaultFetcher
    );
    return {data, error, isLoading};
}