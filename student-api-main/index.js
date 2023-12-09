import express from 'express';
import mongoose from 'mongoose';
import { Student } from './StudentModel.js';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import {StatusCodes} from 'http-status-codes';
import cors from 'cors';
import { Admin } from './AdminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { product } from './ProductsModel.js';


function verifyToken(request,response,next){//middleware to verify token before processing
    const header=request.get('Authorization');//give Beerier token
    if (header) {
        const token=header.split(" ")[1];
        jwt.verify(token,"secret1234",(error,payload)=>{ //token verify with secretkey
            if (error) {
                response.status(StatusCodes.UNAUTHORIZED).send({message:"Invalid token"});
            }
            else{
                next();
            }
        });
    } else {
        response.status(StatusCodes.UNAUTHORIZED).send({message:"Please login first"});
    }
    
}

const app=express();
app.use(cors());
app.use(express.json());

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/EngineeringRentals');
        console.log("Database connection created !")
    } catch (error) {
        console.log(error);
    }
}


app.post("/admin",async (request,response)=>{
    try {
        const reqData=request.body;
        reqData['password']=bcrypt.hashSync(reqData.password,10);
        const admin=new Admin(reqData);
        await admin.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.post("/admin/login",async(request,response)=>{
    try {
        const admin=await Admin.findOne({email:request.body.email});
        if (admin) {
            if (bcrypt.compareSync(request.body.password,admin.password)) { //admin.pas give hash compare with body.pass//sync first compare this 
                const token=jwt.sign({admin:admin.email},"secret1234");//generate token //in token id is email is stored with help of that carry operation
                //so token should be encrypted
                //jwt generate token (encrypted token)
                //header carry algo and signature work like key
                //{admin:admin.email} obj consider for payload > npm i jsonwebtoken
                response.status(StatusCodes.OK).send({message:"Login successful", token:token});
            }
            else{
                response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid email or password"});
            }
        }
        else{
            response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid email or password"});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.get("/product", async(request,response)=>{
    try {
        const products=await product.find();  
        response.send({productdetails:products});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
    }
});

app.post("/student",verifyToken,async(request,response)=>{
    try {
        const reqData=request.body;
        const student=new Student(reqData);
        await student.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.get("/student",verifyToken,async(request,response)=>{
    try {
        const students=await Student.find();  
        response.send({students:students});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
    }
});

app.get("/student/:email",verifyToken,async(request,response)=>{
    try {
       const student=await Student.findOne({email:request.params.email});
       if (student==null) {
        response.status(StatusCodes.NOT_FOUND).send({message:STUDENT_NOT_FOUND});
       }
       else{
         response.send({student:student});
       }
       
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.delete("/student/:email",verifyToken,async(request,response)=>{
    try {
        await Student.deleteOne({email:request.params.email});
        response.send({message:DELETE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.put("/student/:email",verifyToken,async(request,response)=>{
    try {
        await Student.updateOne({email:request.params.email},request.body);
        response.send({message:UPDATE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.listen(8900,()=>{
    console.log("Server has started on 8900");
    connectDb();
});