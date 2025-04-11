"use client"

import UserContext from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react"
import { toast } from "react-toastify";


export const LoginComponent = () =>{

    const context = useContext(UserContext);

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    const doLogin = async(e) =>{

        e.preventDefault();
        let response;

        try {
            
            if(loginData.email.trim() === ""){
                toast.warning("Please enter email !!", {
                    position: "top-center"
                })
            }
            if(loginData.password.trim() === ""){
                toast.warning("Please enter password !!", {
                    position: "top-center"
                })
            }
    
            response = await axios.post("/api/login", loginData);
            context.setUser(response.data.user);
            toast.success(response.data.msg, {
                position: "top-center"
            })
            // console.log(response.data);
            router.push("/profile/user");

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg, {
                position: "top-center"
            })
        }
        

    }

    const clearLoginData = () =>{
        setLoginData({
            email: "", 
            password: ""
        })
    }

    return <div className="grid grid-cols-12 py-4">
    <div className="col-span-8 col-start-3 rounded-xl bg-gradient-to-tr from-blue-400 to-gray-300 sm:col-span-6 sm:col-start-4 md:col-span-4 md:col-start-5 py-6 px-5">
        <div className="text-center">
                <h1 className="text-2xl font-semibold">Login Here</h1>
        </div>
                <div className="px-2">
                    <form action="#!" onSubmit={doLogin}>
                            <div className="mt-4">
                            <label htmlFor="Email" className="block text-base font-medium">Email</label>
                            <input type="email" placeholder="abc@gmail.com" 
                            onChange={(e)=>{
                                setLoginData({
                                    ...loginData,
                                    email: e.target.value
                                })
                            }}
                            value={loginData.email}
                            className="bg-gray-700 border border-gray-600 outline-none rounded-lg p-2 w-full"/>
                            </div>

                            <div className="mt-4">
                            <label htmlFor="Password" className="block text-base font-medium">Password</label>
                            <input type="password" placeholder="Enter password here" 
                            onChange={(e)=>{
                                setLoginData({
                                    ...loginData,
                                    password: e.target.value
                                })
                            }}
                            value={loginData.password}
                            className="bg-gray-700 border border-gray-600 outline-none rounded-lg p-2 w-full"/>
                            </div>

                            <div className="mt-8 pb-3 flex items-center justify-center">
                                <button type="submit" className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-500 font-semibold ms-4">Login</button>
                                <button type="button" onClick={clearLoginData} className="bg-orange-500 py-2 px-3 rounded-lg hover:bg-orange-400 font-semibold ms-4">clear</button>
                            </div>

                            <div className="text-center mt-1 text-gray-100">
                                <h2>New to Work Manager? <a href="/signup" className="underline text-gray-200">signup</a></h2>   
                            </div>
                            {/* {JSON.stringify(loginData)} */}
                    </form>

                </div>
                   
        </div>
    </div>
}