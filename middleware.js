import {withMiddlewareAuthRequired, getSession} from "@auth0/nextjs-auth0/edge";
import {NextResponse} from "next/server";

export default withMiddlewareAuthRequired(async function (req) {
    const res = NextResponse.next();
    const { user} = await getSession(req, res);

    res.isAdmin = user['app/roles'].includes("Admin");

    if (req.url.endsWith("/admin") && !user["app/roles"].includes("Admin")) {
        return NextResponse.redirect(
            req.url.replace("/admin", "/")
        )
    }

    if(req.url.includes("api")) {

    }

});

export const config = {
    matcher: [
        "/dashboard",
        "/admin",
        "/rooms/:id*",
        //"/api/data/v1/:path*",
    ]
}