import UserContext from "@/context/userContext"
import { useContext, useState } from "react"
import { RxCross2 } from "react-icons/rx"
import Swal from 'sweetalert2'
import { FaAngleRight } from "react-icons/fa6";

export default function Task({task, deleteTaskParent}){

    const { user } = useContext(UserContext);
    // console.log(user?.data.name);
    const [status, setStatus] = useState(task.status);

    function deleteTask(taskId){
        deleteTaskParent(taskId)
    }

    return <div className="mt-3">
        <div className={`rounded-md shadow-sm ${status == "completed" ? "bg-green-800" : "bg-gray-800"}`}>
            <div className="p-5">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">{task.title}</h1>
                    <span onClick={()=>{
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                          }).then((result) => {
                            if (result.isConfirmed) {
                                deleteTask(task?._id);
                            }
                          });
                    }} className="bg-gray-950 hover:bg-gray-900 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
                        <div>{<RxCross2/>}</div>
                    </span>
                </div>
                
                <p className="text-sm">{task.content}</p>
                <div className="flex justify-between mt-2">
                    <div className="flex">
                        <p className="text-sm mr-2">Status : <span className="font-semibold">{status}</span></p>
                        <p onClick={()=>{
                            if(status == "pending"){
                                setStatus("completed");
                            }
                            else{
                                setStatus("pending");
                            }
                        }} className={`w-5 h-5 rounded-full flex justify-center items-center cursor-pointer ${status == "completed" ? "bg-green-500" : "bg-gray-400"}`}><FaAngleRight/></p>
                    </div>
                    
                    <p className="text-sm">Author : <span className="font-semibold">{user?.data.name}</span></p>
                </div>
                
                
            </div>
        </div>
    </div>
}