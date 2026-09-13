import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {UplodeCloudinary} from "../utils/cloudinary.js"
import {apiResponse} from "../utils/ApiResponse.js"

const registerUser = asyncHandler ( async (req, res) => {   //this is a simple controller function. use it to handle user registration login
    
    const {fullname, email, username, password} = req.body;  
    console.log("emai:", email);

    if(
        [fullname, email, username, password].some((fields) => 
         fields?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = User.findOne({
        $or: [{ email }, { username }]
    })

    if(!existedUser){
        throw new ApiError(409, "User with email and username already exists")
    }

    const avatarLocalPath = req.fields?.avatar[0]?.path;
    const coverImageLocalPath = req.fields?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "avater image is required");
    }

    const avatar = await UplodeCloudinary(avatarLocalPath);
    const coverImage = await UplodeCloudinary(coverImageLocalPath)

    if(!avatar){
    throw new ApiError(400, "avater image is required"); 
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createUser = await User.findById(user._id).select(
        "-password -refresh_Token"
    )

    if(!createUser){
        throw new ApiError(500, "something want wrongwhile registering the user ");
    }

    res.status(201).json(
        new apiResponse(200, createUser, "User registered successfully")
    )
}) 
export { registerUser };