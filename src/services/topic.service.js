import Topic from "../models/Topic.js";

export const createTopic = (data) => Topic.create(data);

export const getAllTopics = () => Topic.find();

export const getTopicByKey = (key) => Topic.findOne({ key });

export const updateSubTopicStatus = (key, subTopicName, payload) =>
    Topic.updateOne(
        { key, "subTopics.name": subTopicName },
        {
            $set: {
                "subTopics.$.status": payload.status,
                "subTopics.$.completed": payload.completed,
            },
        }
    );
