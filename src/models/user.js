import mongoose, { Schema } from "mongoose"

    const userSchema = new Schema({
        name : String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: String,
        about: String,
    })

    export const NewUser = mongoose.models.users || mongoose.model("users", userSchema);