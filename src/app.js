import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import topicRoutes from "./routes/topic.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";


const app = express();

// app.use(cors());
app.use(
    cors({
        origin: "https://dsa-sheet-web-frontend.vercel.app",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the DSA Sheet API</h1>`);
});

app.use("/api/auth", authRoutes);
app.use("/api/topics", topicRoutes);

app.use(errorHandler);

export default app;
