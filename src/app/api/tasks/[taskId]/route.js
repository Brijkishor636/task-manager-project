import { dbConnection } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}){

    try {
        
        const { taskId } = params;

        await dbConnection();
        const taskExist = await Task.findOne({
            _id: taskId
        });

        if(!taskExist){
            return NextResponse.json({
                msg: "Task doesn't exist"
            }, {status: 404, statusText: "Not found!!"})
        }

        return NextResponse.json(taskExist, {status: 200})

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Failed to load tasks!!"
        })
    }
}


export async function PUT(request, {params}){

    try {
        
        const { title, content, status } = await request.json();
        const { taskId } = params;

        await dbConnection();
        let task = await Task.findById(taskId);

        if(!task){
            return NextResponse.json({
                msg: "Tasks doesn't exist"
            },{status: 404})
        }

        await task.updateOne({
            title,
            content,
            status
        })

        return NextResponse.json({
            msg: "Updated successfully.."
        },{status: 200});
        

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Failed to update task!!!"
        })
    }
}


export async function DELETE(request, {params}){

    try {
        
        const { taskId } = params;
        await dbConnection();
        const existTask = await Task.findById(taskId);
        if(!existTask){
            return NextResponse.json({
                msg: "task doesn't exists!!"
            },{ status: 404, statusText: "Not found"})
        }

        await Task.deleteOne({
            _id: taskId
        })

        return NextResponse.json({
            msg: "Task deletd successfully..."
        },{status: 200, statusText: "ok"})

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Failed to delete task!!"
        })
    }
}