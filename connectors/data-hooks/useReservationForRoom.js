import useSWR from "swr";
import {defaultFetcher, useApi} from "@/connectors/fetchers";

export function UseReservationForRoom(roomId) {
   const {data, error, isLoading} = useSWR(useApi(`/reservations?roomId=${roomId}`), defaultFetcher);

   return {
      data: data, error, isLoading
   }
}