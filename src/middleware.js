import { NextResponse } from "next/server";

export function middleware(request){
    // console.log("middleware executed");

    const loginToken = request.cookies.get("loginToken")?.value;

    if(request.nextUrl.pathname.startsWith("/api/login") || request.nextUrl.pathname.startsWith("/api/users")){
        return;
    }
    
    const loggedInUsernotAccessed = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup")

    if(loggedInUsernotAccessed){
        if(loginToken){
            return NextResponse.redirect(new URL("/profile/user", request.url))
        }
    }
    else{
        if(!loginToken){

            if(request.nextUrl.pathname.startsWith("/api")){
                return NextResponse.json({
                    msg: "Access denied",
                    success: false,
                },{status: 401});
            }

            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
}

export const config = {
    matcher: ["/",
        "/api/:path*",
        "/login",
        "/signup",
        "/addtask",
        "/showtasks",
        "/profile/:path*"
    ],
};