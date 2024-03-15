import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
    name:{
        type:"string",
        required:true,
    },
    address:{
        type:"string",
        required:true,
    },
    number:{
        type:"string",
        required:true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "Student"
    }
})

export default mongoose.model("Prop", propertySchema);