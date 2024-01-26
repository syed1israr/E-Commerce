import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter email"],
        unique: [true, "Email Already exist"],
        
    },
    _id: {
        type: String,
        required: [true, "Please Enter ID"]
    },
    photo: {
        type: String,
        required: [true, "Please Add photo"]
    },
    Role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please Enter Gender"]
    },
    dob: {
        type: Date,
        required: [true, "please Enter Date of Birth"]
    },
}, { timestamps: true });
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    const age = today.getFullYear() - dob.getFullYear();
    const monthsDifference = today.getMonth() - dob.getMonth();
    return age - (monthsDifference < 0 || (monthsDifference === 0 && today.getDate() < dob.getDate()) ? 1 : 0);
});
export const User = mongoose.model("User", schema);
