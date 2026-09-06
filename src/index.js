import "dotenv/config";

import dotenv from "dotenv";

import mongoose from "mongoose";
import DB_Name from "./constants.js";
import connectDB from "./DB/index.js";


connectDB();

/*
// First Approach
import express from "express"
const app = express();

(async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
       app.on("error", (error)=>{
         console.error("ERROR", error);
         throw error
       })
       
       app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR: error")
        throw error
    }
})()
*/  