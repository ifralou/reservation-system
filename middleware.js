import {withMiddlewareAuthRequired, getSession} from "@auth0/nextjs-auth0/edge";
import {NextResponse} from "next/server";
import jwtDecode from "jwt-decode";

let globalToken = "";

async function getToken() {

    //Decode and check expire time
    if(globalToken !== "" && jwtDecode(globalToken).exp > Date.now() ) {
        return globalToken;
    }

    const token = await fetch("https://dev-ancax2t7ynwmvd4o.us.auth0.com/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "client_id": process.env.AUTH0_CLIENT_ID,
            "client_secret": process.env.AUTH0_CLIENT_SECRET,
            "audience":"https://dev-ancax2t7ynwmvd4o.us.auth0.com/api/v2/",
            "grant_type":"client_credentials"
        })
    });

    const tokenResponse = await token.json();
    globalToken = tokenResponse.access_token;
    return globalToken;
}

export default withMiddlewareAuthRequired(async function (req) {


    const res = NextResponse.next();

    const { user} = await getSession(req, res);

    res.isAdmin = user['app/roles'].includes("Admin");

    if (req.url.endsWith("/admin") && !user["app/roles"].includes("Admin")) {
        return NextResponse.redirect(
            req.url.replace("/admin", "/")
        )
    }

    // Implanting token to request on external api
    if(req.url.includes("/api/external") && user["app/roles"].includes("Admin")) {
        console.log("I'am in middleware")
        const token = await getToken();
        const header = new Headers(req.headers);
        header.set("X-MACHINE-TOKEN", token);
        console.log()
        return NextResponse.next({
            request: {
                headers:  header
            }
        });
    }

});

export const config = {
    matcher: [
        "/dashboard",
        "/admin",
        "/rooms/:id*",
        "/api/external/:path*",
        "/api/data/v1/:path*",
    ]
}