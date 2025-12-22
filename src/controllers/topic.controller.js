import * as topicService from "../services/topic.service.js";

export const createTopic = async (req, res, next) => {
    try {
        const topic = await topicService.createTopic(req.body);
        res.status(201).json(topic);
    } catch (err) {
        next(err);
    }
};

export const getTopics = async (req, res, next) => {
    try {
        const topics = await topicService.getAllTopics();
        res.json(topics);
    } catch (err) {
        next(err);
    }
};

export const updateSubTopic = async (req, res, next) => {
    try {
        const { key, name } = req.params;
        await topicService.updateSubTopicStatus(key, name, req.body);
        res.json({ message: "SubTopic updated" });
    } catch (err) {
        next(err);
    }
};
