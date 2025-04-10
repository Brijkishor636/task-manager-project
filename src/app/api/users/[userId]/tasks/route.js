import { Task } from "@/models/task";
import { Edu_AU_VIC_WA_NT_Guides } from "next/font/google";
import { NextResponse } from "next/server";


export async function GET(request, {params}){

    try {
        
        const { userId } = await params;

    const tasks = await Task.find({
        userId: userId
    })

    return NextResponse.json(tasks,{status: 200});

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Failed to fetch tasks!!"
        })
    }

}