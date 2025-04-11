"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
// import { response } from "express";
import { useState } from "react"
import { toast } from "react-toastify";



export default function SignUpComponent(){

    const router = useRouter();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
    });

    const doSignup = async (e)=>{

        e.preventDefault()

        if(data.name.trim() === ""){
            toast.warning("Name is required!!", {
                position: "top-center"
            })
            return;
        }

        if(data.email.trim() === ""){
            toast.warning("Email is required!!", {
                position: "top-center"
            })
            return;
        }

        if(data.password.trim() === ""){
            toast.warning("Password is required!!", {
                position: "top-center"
            })
            return;
        }

        let response;

        try{

            response = await axios.post("/api/users", data)

            toast.success(response.data.msg, {
                position: "top-center"
            })

            router.push("/");
            // setData({
            //     name: "",
            //     email: "",
            //     password: "",
            //     about: ""
            // })
        }
        catch(e){
            console.log(e)
            toast.error(e.response.data.msg, {
                position: "top-center"
            });
        }

    }


    const handleNewClear = () =>{
        setData({
            name: "",
            email: "",
            password: "",
            about: ""
        });
    }


    return <div className="grid grid-cols-12 py-4">
        <div className="col-span-8 col-start-3 rounded-xl bg-gradient-to-tr from-blue-400 to-gray-300 sm:col-span-6 sm:col-start-4 md:col-span-4 md:col-start-5 py-6 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-semibold">SignUp Here</h1>
            </div>
            <form action="#!" onSubmit={doSignup}>
            <div className="mt-4">
                <label htmlFor="Name" className="block text-base font-medium">Name</label>
                <input type="text" placeholder="Enter here" 
                onChange={(e)=>{
                    setData({
                        ...data,
                        name: e.target.value
                    })
                }}
                value={data.name}
                className="bg-gray-700 border border-gray-600 outline-none rounded-lg p-2 w-full"/>
            </div>

            <div className="mt-4">
                <label htmlFor="Email" className="block text-base font-medium">Email</label>
                <input type="email" placeholder="abc@gmail.com" 
                onChange={(e)=>{
                    setData({
                        ...data,
                        email: e.target.value
                    })
                }}
                value={data.email}
                className="bg-gray-700 border border-gray-600 outline-none rounded-lg p-2 w-full"/>
            </div>

            <div className="mt-4">
                <label htmlFor="Password" className="block text-base font-medium">Password</label>
                <input type="password" placeholder="Enter password here" 
                onChange={(e)=>{
                    setData({
                        ...data,
                        password: e.target.value
                    })
                }}
                value={data.password}
                className="bg-gray-700 border border-gray-600 outline-none rounded-lg p-2 w-full"/>
            </div>

            <div className="mt-4">
                <label htmlFor="About" className="block text-base font-medium">About</label>
                <textarea placeholder="Enter here" 
                onChange={(e)=>{
                    setData({
                        ...data,
                        about: e.target.value
                    })
                }}
                value={data.about}
                className="bg-gray-700 border border-gray-600 outline-none rounded-lg p-2 w-full text-gray-300"
                rows={3}/>
            </div>

            <div className="mt-4 pb-3 flex items-center justify-center">
                <button type="submit" className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-500 font-semibold ms-4">SignUp</button>
                <button type="button" onClick={handleNewClear} className="bg-red-500 py-2 px-3 rounded-lg hover:bg-red-400 font-semibold ms-4">clear</button>
            </div>

            <div className="text-center mt-1 text-gray-200">
                <h2>Already Signded up? <a href="/login" className="underline text-gray-300">login</a></h2>
                
            </div>
            </form>
        </div>
    </div>
}