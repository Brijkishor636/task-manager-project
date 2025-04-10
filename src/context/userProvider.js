"use client"
import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import axios from "axios";

export default function UserProvider({children}){

    const [user, setUser] = useState(undefined);

    useEffect(()=>{

        async function done(){
        try {
            const newUser = await axios.get("http://localhost:3000/api/current");
            // console.log(newUser);
            setUser({...newUser});
        } catch (error) {
            console.log(error);
            // toast.error("Error in fetching user");
            setUser(undefined);
        }
    }
    done();
    },[])

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}