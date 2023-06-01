import {useBackendServiceURL} from "@/utils/utlis";

export default async function handler(req, res) {
    const {roomId} = req.query;
    console.log(req.query);

    if(roomId) {
        const response = await fetch(useBackendServiceURL(`/reservations/${roomId}`)).then(res => res.json())
        res.json(200).json(response);
    }

    res.json(418).json({message: "Sorry mate."})
}