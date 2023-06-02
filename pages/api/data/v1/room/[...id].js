import {useBackendServiceURL} from "@/utils/utlis";

export const useMicroShit = (relative) => `http://localhost:8081${relative}`;

export default async function handler(req, res) {
    const {id} = req.query;
    console.log("ROOMID")
    console.log(id[0]);

    if(id) {
        const response = await fetch(useMicroShit(`/rooms/${id}`))
            .then(res => res.json());
        res.status(200).json(response);
        console.log(response);
    }

    res.status(418).json({message : "obser"});
}