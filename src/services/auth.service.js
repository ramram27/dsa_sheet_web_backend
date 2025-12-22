import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async ({ email, password }) => {
    const hash = await bcrypt.hash(password, 10);
    return User.create({ email, password: hash });
};

export const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    return user;
};
