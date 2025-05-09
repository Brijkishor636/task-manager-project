const { default: mongoose } = require("mongoose");


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "completed"],
        default: "pending"
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);