"use client"

import UserContext from "@/context/userContext";
import { dbConnection } from "@/helper/db";
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export const CustomNavbar = () =>{

  const context = useContext(UserContext);
  const router = useRouter();
    // dbConnection();
  
    const [isOpen, setIsopen] = useState(false);

    function handleClick(){
        setIsopen(!isOpen);
    }

    async function doLogout(){

      try {
        const result = await axios.post("http://localhost:3000/api/logout");
        // console.log(result);
        context.setUser(undefined);
        router.push("/");
      } catch (error) {
        console.log(error);
        toast.error("Logout Error!!");
      }
      
    }

    
    // console.log(context.user);

    return <div className="bg-green-500 h-12 p-3 flex justify-between px-20 items-center mb-3">
        <div className="text-sm lg:text-xl font-semibold">
            Task Manager
        </div>
        <div className="hidden lg:flex gap-8">
          {context.user && (
              <>
                <Link href={"/"} className="hover:text-green-300 cursor-pointer">Home</Link>
                <Link href={"/addtask"} className="hover:text-green-300 cursor-pointer">Add Task</Link>
                <Link href={"/showtasks"} className="hover:text-green-300 cursor-pointer">Show Tasks</Link>
              </>
            )
          }
            
        </div>
        <div className="hidden lg:flex gap-x-5">
            {context.user && (
                <>
                  <Link href={"#!"} className="hover:text-green-300">{context.user.data?.name}</Link>
                  <button onClick={doLogout} className="ml-5 hover:text-green-300">Logout</button>
                </>
            )}

            {!context.user && (
                <>
                <Link href={"/login"} className="hover:text-green-300">Login</Link>
                <Link href={"/signup"} className="ml-5 hover:text-green-300">SignUp</Link>
              </>
            )} 
            
        </div>
        <button className="text-white lg:hidden" onClick={handleClick}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>


        <div
        className={`fixed inset-0 bg-gray-300 text-gray-700 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}>
        <div className="flex justify-between px-20 h-14 shadow items-center">
            <div className="text-xl font-semibold">
                Work Manager
            </div>
            <button className="font-bold" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div className="p-3">
            {
              context.user && (
                <>
                  <Link href={"/"} onClick={handleClick} className="m-2 p-3 hover:bg-gray-400 block rounded-lg font-medium">Home</Link>
                  <Link href={"/addtask"} onClick={handleClick} className="m-2 p-3 hover:bg-gray-400 block rounded-lg font-medium">Add Task</Link>
                  <Link href={"/showtasks"} onClick={handleClick} className="m-2 p-3 hover:bg-gray-400 block rounded-lg font-medium">Show Tasks</Link>
                </>
              )
            }
                    
        </div>

        <div className="h-[1px] bg-gray-400"></div>

        <div className="p-3">
          
            {context.user && (
              <>
                  <Link href={"#!"} className="m-2 p-3 hover:bg-gray-400 block rounded-lg font-medium">{context.user.data?.name}</Link>
                  <button onClick={doLogout} className="m-2 p-3 hover:bg-gray-400 block rounded-lg font-medium">Logout</button>
              </>
            )}

            {!context.user && (
              <>
                <Link href={"/login"} className="m-2 p-3 hover:bg-gray-400 block rounded-lg font-medium">Login</Link>
                <Link href={"/signup"} onClick={handleClick} className="m-2 p-3 hover:bg-gray-400 block rounded-lg font-medium">SignUp</Link>
              </>
            )}
              
            
        </div>
            
        </div>
    </div>
}