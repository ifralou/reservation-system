import {headers} from "next/headers";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export default async function handler(req, res) {
    const managmentToken = req.headers["x-machine-token"]

    console.log("managmentToken in the header: " + managmentToken);
    const userResponse = await fetch("https://dev-ancax2t7ynwmvd4o.us.auth0.com/api/v2/users", {
        headers: {
            "authorization": `Bearer ${managmentToken}`
        }
    });
    const response = await userResponse.json();

    console.log("Reponse in handler")
    console.log(response);

    return res.status(200).json({
        users: response.map(user => ({
            email: user.email,
            name: user.name,
            lastLoginDate: user.last_login,
            lastIp: user.last_ip,
            count: user.logins_count
        }))
    });
}
