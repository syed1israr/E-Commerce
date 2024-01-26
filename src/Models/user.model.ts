import mongoose from "mongoose";
import validator from "validator";
interface iUser extends Document{
    _id:string;
    name:string;
    photo:string;
    email:string,
    role:"admin" | "user";
    gender:"male" | "female";
    dob : Date;
    createdAt:Date;
    updatedAt:Date;
    age:number;

}
const schema= new mongoose.Schema(   
    {
        name:{
            type: String,
            required:[true,"Please Enter name"]
        },
        email:{
            type: String,
            required:[true,"Please Enter email"],
            unique: [true,"Email Already exist"],
            validator:validator._default.isEmail
        },
        _id:{
            type: String,
            required:[true,"Please Enter ID"]
        },
        
        photo:{
            type: String,
            required:[true,"Please Add photo"]
        } ,

        Role:{
            type: String,
            enum:["admin","user"],
            default: "user"
        },
        gender:{
            type: String,
            enum:["male","female"],
            required:[true,"please Enter Gender"]
        },
        dob:{
            type: Date,
            required:[true,"please Enter Date of Birth"]
        },
    
    },

{timestamps:true}
);


schema.virtual("age").get(function(): number {
    const today = new Date();
    const dob: Date = this.dob;

    const age = today.getFullYear() - dob.getFullYear();
    const monthsDifference = today.getMonth() - dob.getMonth();

    return age - (monthsDifference < 0 || (monthsDifference === 0 && today.getDate() < dob.getDate()) ? 1 : 0);
});

export const User=mongoose.model<iUser>("User",schema);