import { NewUser } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { dbConnection } from "@/helper/db";

export async function POST(request){

    const { email, password } = await request.json();

    // console.log(email, password);

    try {
        await dbConnection();
        const user = await NewUser.findOne({
            email: email
        });
        // console.log(user);

        if(!user){
            return NextResponse.json({
                msg: "Invalid data / not found !!"
            }, {status: 400});
        }

        const verifiedPassword = await bcrypt.compare(password, user.password);
        

        if(!verifiedPassword){
            return NextResponse.json({
                msg: "Invalid data / not found !!"
            }, {status: 400});
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email,
            password: user.password
        }, process.env.JWT_SECRET);
        // console.log(token);

        const response = NextResponse.json({
            msg: "Login successfully...",
            user:user,
            success: true
        }, {status: 200});

        response.cookies.set("loginToken", token, {
            expiresIn: "1d",
            httpOnly: true,
        })

        return response;
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "something up with server !!"
        }, {status: 500})
    }
}