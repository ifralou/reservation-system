import {roomsForDashboard} from "@/connectors/mocks";
import {useBackendServiceURL} from "@/utils/utlis";

export default async function handler(req, res) {
    const {pageNo} = req.query;
    console.log(req.query);

    const response = await fetch(useBackendServiceURL(`/rooms/dashboard?` + new URLSearchParams({pageNo})))
        .then(res => res.json())
    console.log(response);

    res.status(200).json(response)
}