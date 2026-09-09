import { v2 as cloudinary } from 'cloudinary'
import { error } from 'console';
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
});


const uplodeCloudinary = async(localFilePath) => {    // uplode file to cloudinary and return the url of the file
    try {
        if(!localFilePath) return null
        // Update the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has bern uploded successfull
        console.log("File on uploded on cloudinary", response.url);
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the file from local strorage
        console.log("ERROR: ", error);
        return null;
    }
}