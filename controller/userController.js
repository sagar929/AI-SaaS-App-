import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register Controller
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing details" });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        res.json({
            success: true,
            token,
            user: { name: user.name, email: user.email }
        });

    } catch (error) {
        console.error("Register Error:", error.message);
        res.json({ success: false, message: error.message });
    }
};

// Login Controller
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        res.json({
            success: true,
            token,
            user: { name: user.name, email: user.email }
        });

    } catch (error) {
        console.error("Login Error:", error.message);
        res.json({ success: false, message: error.message });
    }
};

// Fetch User Credits Controller
const userCredits = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);
        res.json({ 
            success: true, 
            credits: user.creditBalance, 
            user: { name: user.name, email: user.email }
        });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }


};

export { registerUser, loginUser, userCredits };
