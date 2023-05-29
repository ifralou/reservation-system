import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export default async function handler(req, res) {
    const managmentToken = req.headers["x-machine-token"]
    const {id} = req.query;

    console.log("USER ID: " + id);
    const userResponse = await fetch(`https://dev-ancax2t7ynwmvd4o.us.auth0.com/api/v2/users/${id}/roles`, {
        method: "POST",
        headers: {
            "authorization": `Bearer ${managmentToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "roles" : ["rol_cOtOBbmArHKsEo2R"]
        })
    })
        .then(res => res.json())
        .then(
        (res) => {
            console.log("Delete status:")
            console.log(res);
        }
    );
}
