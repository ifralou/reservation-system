import {buildings, roomsForDashboard} from "@/connectors/mocks";

export default function handler(req, res) {
    res.status(200).json(
        buildings
    );
}