import {buildings, roomsForDashboard, roomsFull} from "@/connectors/mocks";
import {useRouter} from "next/router";

export default function handler(req, res) {
    const {buildingId} = req.query;

    if(buildingId) {
       res.status(200).json(roomsFull);
    } else {
        res.status(200).json([])
    }

}