import express from "express";

import protectRoute from "../middlewares/ProtectRoute.js";
import {
  addComment,
  checkUserUpvote,
  createPost,
  getPostDetails,
  getPostsByCollege,
  toggleUpvote,
} from "../controllers/posts.controller.js";

const PostRouter = express.Router();

PostRouter.post("/addnew", protectRoute, createPost);
PostRouter.get("/college/:collegeId", getPostsByCollege);
PostRouter.post("/checkupvote/:postId", checkUserUpvote);
PostRouter.post("/togglevote/:postId", protectRoute, toggleUpvote);
PostRouter.get("/single/:postId", getPostDetails);
PostRouter.post("/comment/addnew/:postId", addComment);

export default PostRouter;
