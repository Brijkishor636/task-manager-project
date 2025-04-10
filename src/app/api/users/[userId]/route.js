import { NewUser } from "@/models/user";
import { NextResponse } from "next/server";


export async function GET(request, {params}){

    try{

    const {userId} = params;

    const user = await NewUser.findById(userId).select("-password");

    return NextResponse.json(user);
    }
    catch(e){
        return NextResponse.json({
            msg : "Error during fetching user"
        })
    }
}

export async function DELETE(request, {params}){

    try {
        
        const {userId} = params;

        const user = await NewUser.findById(userId);
        if(!user){
            return NextResponse.json({
                msg : "User doesn't exist"
            },{status: 400, statusText: "Not found"})
        }

        await NewUser.deleteOne({
            _id: userId
        })

        return NextResponse.json({
            msg: `User deleted successfully`,
            success: true
        })

    } catch (error) {
        return NextResponse.json({
            msg: "Error during deleting user",
            success: false
        })
    }
}


export async function PUT(request, {params}){

    try {
        const { name, password, about } = await request.json();

        const {userId} = params;
        const existingUser = await NewUser.findById(userId);
        if(!existingUser){
            return NextResponse.json({
                msg: "User doesn't exists"
            }, {status : 400})
        }

        await NewUser.updateOne({
            name: name,
            password: password,
            about: about
        })

        return NextResponse.json({
            msg: "Updated successfully.."
        })

    } catch (error) {
        return NextResponse.json({
            msg: "Error during updatig user!!"
        })
    }
}