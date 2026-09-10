import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({                    //to enable Cross-Origin Resource Sharing (CORS) for the application.
 origin: process.env.CORS_ORIGIN,
 credentials: true
}))


app.use(express.json({limit: "16kb"}))                      //to parse the incoming request body in json format and limit the size of the request body to 16kb
app.use(express.urlencoded({extended: true, limit: "16kb"}))   
app.use(express.static("public"))   //to serve static files from the public directory

app.use(cookieParser());   // to parse cookies from the request headers


// import router
import userRouter from "./routers/user.router.js";

app.use("/api/v1/user", userRouter);


export {app}