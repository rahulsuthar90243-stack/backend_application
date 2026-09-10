import mongoose from "mongoose";
import DB_Name from "../constants.js";


const connectDB  = async () =>{
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is not defined in the environment");
    }

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`,
      { serverSelectionTimeoutMS: 10000 }
    );
    console.log(`\n MONGODB Connected !! DB HOST ${connectionInstance.connection.host}`);
    
    
  } catch (error) {
    console.error("MONGODB Connection Error:", error);
    throw error;
  }
}

export default connectDB