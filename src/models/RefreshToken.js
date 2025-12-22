import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
        collection: "refresh_tokens",
    }
);

export default mongoose.model("RefreshToken", refreshTokenSchema);
