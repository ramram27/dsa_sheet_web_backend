import { Router } from "express";
import * as controller from "../controllers/topic.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", auth, controller.createTopic);
router.get("/", controller.getTopics);
router.patch("/:key/subtopic/:name", auth, controller.updateSubTopic);

export default router;
