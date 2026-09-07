import "dotenv/config";

import dotenv from "dotenv";

import mongoose from "mongoose";
import DB_Name from "./constants.js";
import connectDB from "./DB/index.js";
import { app } from "./app.js";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 7000, () =>{
        console.log(`app on listening in port ${process.env.PORT}`);
    })
     app.on("error", (error)=>{
         console.error("ERROR", error);
         throw error
       })
})
.catch((error) => {
    console.log("MONGO DB connection failed: ", error);

})

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