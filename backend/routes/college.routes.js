import express from "express";

import protectRoute from "../middlewares/ProtectRoute.js";
import {
  AllColleges,
  createCollege,
} from "../controllers/colleges.controller.js";

const CollegeRouter = express.Router();

CollegeRouter.post("/addnew", protectRoute, createCollege);
CollegeRouter.get("/getall", AllColleges);

export default CollegeRouter;
