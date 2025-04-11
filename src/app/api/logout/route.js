import { NextResponse } from "next/server";

export async function POST(request){

    const response = NextResponse.json({
        msg: "Logged out!!",
        success: true,
    })

    response.cookies.set("loginToken", "", {
        expiresIn: new Date(0),
    })

    return response;
}