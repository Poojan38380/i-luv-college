import express from "express";

import protectRoute from "../middlewares/ProtectRoute.js";
import {
  AllColleges,
  SingleCollege,
  createCollege,
  hasUserLikedCollege,
  likeCollege,
  unlikeCollege,
} from "../controllers/colleges.controller.js";

const CollegeRouter = express.Router();

CollegeRouter.post("/addnew", protectRoute, createCollege);
CollegeRouter.post("/checkliked", protectRoute, hasUserLikedCollege);
CollegeRouter.post("/like", protectRoute, likeCollege);
CollegeRouter.post("/unlike", protectRoute, unlikeCollege);
CollegeRouter.get("/getall", AllColleges);
CollegeRouter.get("/single/:id", SingleCollege);

export default CollegeRouter;
