import mongoose, { Schema } from "mongoose";

const adminSchema=new Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
  
});

export const Admin=mongoose.model('admin',adminSchema);