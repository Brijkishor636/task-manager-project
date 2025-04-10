
import { dbConnection } from "@/helper/db";
import { NewUser } from "@/models/user";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"



export async function GET(){

    try {
        
        await dbConnection();
        const users = await NewUser.find().select("-password");

        return NextResponse.json(users);

    } catch (error) {
        return NextResponse.json({
            msg: "Error during fetching users.."
        })
    }

}


export async function POST(request){

    const { name, email, password, about } = await request.json();

    try {

        await dbConnection();
        const existUser = await NewUser.findOne({
            email: email,
        })

            if(!existUser){
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await new NewUser({
                name,
                email,
                password: hashedPassword,
                about,
            })
        
            await user.save();
        
            return NextResponse.json({
                msg: "User created successfully..",
                success: true,
            });
        }
        else{
            return NextResponse.json({
                msg: "User already exist, please login !!",
                success: false
            }, {status: 403})
        }

    } catch (error) {
        return NextResponse.json({
            msg: "Error during user creation",
            success: false,
        });
    }
    
}