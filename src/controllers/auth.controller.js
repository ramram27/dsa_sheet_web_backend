import * as authService from "../services/auth.service.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await authService.loginUser(req.body);
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        // 📧 Optional: email cookie (for UI only)
        res.cookie("userEmail", user.email, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000
        });
        res.json({ token });
    } catch (err) {
        next(err);
    }
};
