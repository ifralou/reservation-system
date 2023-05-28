import {roomsFull} from "@/connectors/mocks";

export default function handler(req, res) {
    const {buildingId} = req.query;

    if(buildingId) {
       res.status(200).json(roomsFull);
    } else {
        res.status(200).json([])
    }
}