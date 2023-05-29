import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const getManagmentUrl = (relative) =>
    `https://dev-ancax2t7ynwmvd4o.us.auth0.com${relative}`


const authorizeHeader = (req) => {
    const managmentToken = req.headers["x-machine-token"]

    return {
        "authorization": `Bearer ${managmentToken}`
    }
};

export default async function handler(req, res) {

    const userResponse = await fetch(getManagmentUrl("/api/v2/users"), {
        headers: authorizeHeader(req)
    });

    const response = await userResponse.json();

    console.log("Reponse in handler")
    console.log(response);

    const users = await Promise.all(
        response.map(async (user, i) => {
            const just = await (new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, (i + 1) * 500);
            }))

            const roles = await fetch(getManagmentUrl(`/api/v2/users/${user.user_id}/roles`), {
                headers: authorizeHeader(req)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    console.log("Status: " + res.statusCode)
                    return res.map(r => r.name)
                })

            console.log("Roles");
            console.log(roles);

            return {
                id: user.user_id,
                email: user.email,
                name: user.name,
                lastLoginDate: user.last_login,
                lastIp: user.last_ip,
                count: user.logins_count,
                roles: roles
            }
        })
    )

    return res.status(200).json({users});
}
