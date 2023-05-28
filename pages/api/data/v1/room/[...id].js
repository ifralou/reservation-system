import {roomsFull} from "@/connectors/mocks";
import {useRouter} from "next/router";

export default function handler(req, res) {
    const {id, equipment} = req.query;

    if(id) {
        res.status(200).json(roomsFull[id]);
    } else {
        res.status(200).json({})
    }

}