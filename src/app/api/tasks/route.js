// import UserContext from "@/context/userContext";
import { Task } from "@/models/task";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { NewUser } from "@/models/user";
import { dbConnection } from "@/helper/db";
// import { useContext } from "react";


export async function GET(){

    try {
        await dbConnection();
        const tasks = await Task.find();
        return NextResponse.json(tasks,{status: 200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "Failed to fetch tasks!!"
        })
    }

}

export async function POST(request){

        const { title, content, userId, status} = await request.json();
        const cookieStore = await cookies(); 
        const loginToken = cookieStore.get("loginToken")?.value;
        const data = jwt.verify(loginToken, process.env.JWT_SECRET);
        await dbConnection();
        const user = await NewUser.findOne({email:data.email})
        // console.log(user);

    try{

        if (!loginToken && !user) {
            return NextResponse.json({ message: "Unauthorized or user not found!!" }, { status: 401 });
        }

        const task = await new Task({
            title,
            content, 
            userId: user._id,
            status
        })

        await dbConnection();
        await task.save();

        return NextResponse.json({
            msg: "Task created successfully.."
        }, {status: 200})
    }
    catch(e){
        console.log(e);
        return NextResponse.json({
            msg: "Internal server error"
        },{status:500, success:false})
    }
}