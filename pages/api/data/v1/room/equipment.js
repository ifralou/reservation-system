export default function handler(req, res) {
    console.log(req.method);
    console.log(req.body);
    if (req.method === "POST") {

        const {roomId, buildingId, features} = JSON.parse(req.body);
        console.log("features in api" + features);

        return res.status(200).json({ features });

    }
    return res.status(404).json({message: "fuck"});
}