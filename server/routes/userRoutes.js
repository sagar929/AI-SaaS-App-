import express from "express"
import { registerUser,loginUser } from "../controller/userController.js";

const userRoter = express.Router()

userRoter.post('/register',registerUser)
userRoter.post('/login',loginUser)

export default userRoter;


// http://loca1host:4000/api/user/register
// http://loca1host:4000/api/user/1ogin