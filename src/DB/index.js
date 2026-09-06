// second approach
import mongoose, { connect } from "mongoose";
import DB_Name from "../constants.js"


const connectDB  = async () =>{
  try {

    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
    console.log(`\n MONGODB Connected !! DB HOST ${connectionInstance.connection.host}`);
    
    
  } catch (error) {
    console.log("MONGODB Connection Error: ", error);
    process.emit(1);
  }
}

export default connectDB