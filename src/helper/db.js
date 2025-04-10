
// import { NewUser } from '@/models/user';
import mongoose from 'mongoose'

const config = {
    isConnected: 0,
}

export const dbConnection = async () =>{

    if(config.isConnected){
        return;
    }
    
    try{
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        })
    
        console.log("connected successfully to db..");
        // console.log(connection.readyState);
        config.isConnected = connection.readyState;


        // const user = NewUser({
        //     name: "Brij Kishor Kumar",
        //     email: "brij@gmail.com",
        //     about: "This is brij"
        // })

        // await user.save();

        console.log(connection.host);
    }catch(e){
        console.log("Error during db connection ", e);
    }
}