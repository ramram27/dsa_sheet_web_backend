import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://rohit123:mn%40%40%24db@cluster0.lstnt4r.mongodb.net/dsa_topic?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected");
};

export default connectDB;
