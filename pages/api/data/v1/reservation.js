export default function handler(req, res) {
    const {buildingId, roomId, userId, from, to} = req.query;
    console.log(req.query);

    if(buildingId && roomId && userId && from && to) {
        res.status(200).json(true);
    } else {
        res.status(406).json(false)
    }

}