import {useState} from "react";
import useSWR from "swr";
import {dashboardFetcher, defaultFetcher, useApi} from "@/connectors/fetchers";

export default function useDashboardData() {
    const {data, error, isLoading} = useSWR(
        useApi("/dashboard"),
        defaultFetcher
    );
    return {data, error, isLoading};
}