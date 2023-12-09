import mongoose, { Schema } from "mongoose";

const productSchema=new Schema({
    productId:Number,
    imageurl:String,
    name:String,
    description:String,
    price:Number,
    availability:String
  
});

export const product=mongoose.model('productdetails',productSchema);