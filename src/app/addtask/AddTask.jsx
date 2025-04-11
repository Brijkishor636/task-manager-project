"use client"
import Image from "next/image"
import loginSvg from "../../assets/loginSvg.svg"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

export default function AddTaskComponent(){

    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "none",
        userId: "67a56dd80c5f0753f837594e"
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post("/api/tasks",{
                title: task.title,
                content: task.content,
                status: task.status,
                userId: task.userId
            })
    
            console.log(response.data.msg);
            toast.success("Task added successfully!!", {
                position: "top-center",
            });

            setTask({
                title: "",
                content: "",
                status: "none",
            })
        }
        
        catch(error){
            console.log(error)
            toast.error("Task not added!!", {
                position: "top-center",
            });
        }

    }

    const handleClear = () => { 
        setTask({
          title: "",
          content: "",
          status: "none",
          userId: "",
        });
        toast.info("Cleared !!", {
            position: "top-center"
        })
      };

    return <div className="grid grid-cols-12 justify-center">
        <div className="col-span-10 col-start-2 p-3 md:col-span-8 md:col-start-3 lg:col-span-4 lg:col-start-5 bg-gradient-to-tr from-orange-300 to-green-300 rounded-xl px-5 pb-5">

            <div className="mb-8 mt-4 flex justify-center">
                <Image src={loginSvg} 
                style={{width: "50%"}}
                alt="Login Image"/>
            </div>
            <h1 className="flex justify-center text-2xl font-semibold">Add Your Task here!!</h1>

            <form action="#!" onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="task_title" className="block text-sm font-medium mb-1">Title</label>
                    <input type="text" id="task_title"
                    onChange={(e)=>{
                        setTask({
                            ...task,
                            title: e.target.value
                        })
                    }}
                    value={task.title}
                    className="w-full p-2 bg-gray-600 border border-gray-600 rounded-xl outline-none focus:ring-gray-400 text-gray-300"/>
                </div>

                <div className="mt-4">
                    <label htmlFor="task_content" className="block text-sm font-medium mb-1">Content</label>
                    <textarea id="task_content" rows={4}
                    onChange={(e)=>{
                        setTask({
                            ...task,
                            content: e.target.value
                        })
                    }}
                    value={task.content}
                    className="w-full p-2 bg-gray-600 border border-gray-600 rounded-xl outline-none focus:ring-gray-400 text-gray-300"/>
                </div>

                <div className="mt-4">
                    <label htmlFor="task_status" className="block text-sm font-medium mb-1">Content</label>
                    <select id="task_status" 
                    onChange={(e)=>{
                        setTask({
                            ...task,
                            status: e.target.value
                        })
                    }}
                    value={task.status}
                    className="w-full p-2 bg-gray-600 border border-gray-600 rounded-xl outline-none focus:ring-gray-400 text-gray-300">
                        <option value="none" disabled>---Select Status---</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                    {/* {JSON.stringify(task)} */}
                </div>
                <div className="mt-4 flex justify-center">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-800 px-3 py-2 rounded-lg ms-3">Add Task</button>
                    <button type="button" onClick={handleClear} className="bg-red-600 hover:bg-red-800 px-3 py-2 rounded-lg ms-3">Clear</button>
                </div>
            </form>
        </div>
    </div>
}