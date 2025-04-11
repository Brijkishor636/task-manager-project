"use client"

import UserContext from "@/context/userContext";
// import { Task } from "@/models/task";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import Task from "./task";
import { toast } from "react-toastify";

export default function ShowTask(){

    const context = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    const userId = context.user?.data._id;
    // console.log(userId);

    async function loadTasks(userId){
        const task = await axios.get(`https://abc123.ngrok.io/api/users/${userId}/tasks`);
        // console.log(task);
        setTasks([...task.data].reverse());
    }

    useEffect(()=>{
        if(context.user){
            loadTasks(userId);
        }
    },[context.user]);

    async function deleteTaskParent(taskId){
        
        try {
            const result = await axios.delete(`https://abc123.ngrok.io/api/tasks/${taskId}`)
            console.log(result);
            const newTask = tasks.filter(item => item._id!=taskId);
            setTasks(newTask);
            toast.success("Your task is deleted..",{
            position: "top-center"
        })

        } catch (error) {
            console.log(error);
            toast.error("Error in deleting task!!",{
                position: "top-center"
            })
        }

    }

    // console.log(tasks);
    return (<div className="grid grid-cols-12">
        <div className="col-span-6 col-start-4">
            <h1 className="text-xl font-semibold">Your Tasks ( {tasks.length} )</h1>

            {tasks.map((task)=>(
                <Task task={task} key={task._id} deleteTaskParent={deleteTaskParent}/>
            ))}
        </div>
    </div>)
}