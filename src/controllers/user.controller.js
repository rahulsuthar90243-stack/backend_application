import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler((req, res) => {   //this is a simple controller function. use it to handle user registration login
    return res.status(200).json({
        message: "ok"
    })
})


export { registerUser };