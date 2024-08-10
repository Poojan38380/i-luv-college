import express from "express";

import protectRoute from "../middlewares/ProtectRoute.js";
import {
  createPost,
  getPostsByCollege,
} from "../controllers/posts.controller.js";

const PostRouter = express.Router();

PostRouter.post("/addnew", protectRoute, createPost);
PostRouter.get("/college/:collegeId", getPostsByCollege);

export default PostRouter;
