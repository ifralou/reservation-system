import {roomsForDashboard} from "@/connectors/mocks";

export default function handler(req, res) {
    console.log(req.query);

    res.status(200).json(
        {
            roomsForDashboard : roomsForDashboard,
            totalPages: 3
        }
    );
}