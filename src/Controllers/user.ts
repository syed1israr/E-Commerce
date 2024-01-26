import { Request,Response,NextFunction } from "express"
import { User } from "../Models/user.model.js";
import { newUserRequestBody } from "../Types/types.js";

export const newUser=
async(
  req:Request<{},{},newUserRequestBody>,
  res:Response,
  next:NextFunction
  )=>{
    try {
        const {name,email,gender,_id,dob,photo}=req.body;
      const user=  await User.create({
        name,
        email,
       
        gender,
        _id,
        dob,
        photo
        })
        res.status(200).json({success:true,message:`Welcome ${user.name}`})

    } catch (error) {
        
    }    
}