import express from "express"
import { registerUser,loginUser, userCredits } from "../controller/userController.js";
import authUser from "../middlewares/auth.js";

const userRoter = express.Router()

userRoter.post('/register',registerUser)
userRoter.post('/login',loginUser)
userRoter.get('/credits',authUser,userCredits)

export default userRoter;


// http://loca1host:4000/api/user/register
// http://loca1host:4000/api/user/1ogin