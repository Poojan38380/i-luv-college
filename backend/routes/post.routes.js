import express from "express";

import protectRoute from "../middlewares/ProtectRoute.js";
import {
  checkUserUpvote,
  createPost,
  getPostsByCollege,
  toggleUpvote,
} from "../controllers/posts.controller.js";

const PostRouter = express.Router();

PostRouter.post("/addnew", protectRoute, createPost);
PostRouter.get("/college/:collegeId", getPostsByCollege);
PostRouter.post("/checkupvote/:postId", checkUserUpvote);
PostRouter.post("/togglevote/:postId", toggleUpvote);

export default PostRouter;
