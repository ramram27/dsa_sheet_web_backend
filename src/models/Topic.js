import mongoose from "mongoose";

const subTopicSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        leetCodeLink: {
            type: String,
            default: "",
        },
        youTubeLink: {
            type: String,
            default: "",
        },
        articleLink: {
            type: String,
            default: "",
        },
        level: {
            type: String,
            enum: ["EASY", "MEDIUM", "HARD"],
            required: true,
        },
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Done"],
            default: "Pending",
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    { _id: false } // embedded document
);

const topicSchema = new mongoose.Schema(
    {
        key: {
            type: String, // algorithms, dataStructures, databases
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Done"],
            default: "Pending",
        },
        color: {
            type: String,
            required: true,
        },
        subTopics: {
            type: [subTopicSchema],
            default: [],
        },
    },
    {
        timestamps: true,
        collection: "topics",
    }
);

export default mongoose.model("Topic", topicSchema);
