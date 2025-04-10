import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { NewUser } from "@/models/user";
import { dbConnection } from "@/helper/db";

export async function GET(request){

    try{
        const loginToken = request.cookies.get("loginToken")?.value;
        // console.log(loginToken);

    if (!loginToken) {
        return NextResponse.json({ error: "Authentication token is missing" }, { status: 401 });
    }

    const data = jwt.verify(loginToken, process.env.JWT_SECRET);
    // console.log(data);
    await dbConnection();
    const user = await NewUser.findOne({email: data.email}).select("-password");
    // console.log(user);

    // if(!user){
    //     NextResponse.json({
    //         msg: "user not found!!"
    //     },{status:404})
    // }
    // console.log(user);

    return NextResponse.json(user);
    }
    catch(e){
        console.log(e);
        return NextResponse.json({
            msg: "Internal server error!!!"
        },{status:500})
    }
}