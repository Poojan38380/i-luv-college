import express from "express";

import protectRoute from "../middlewares/ProtectRoute.js";
import {
  AllColleges,
  SingleCollege,
  createCollege,
} from "../controllers/colleges.controller.js";

const CollegeRouter = express.Router();

CollegeRouter.post("/addnew", protectRoute, createCollege);
CollegeRouter.get("/getall", AllColleges);
CollegeRouter.get("/single/:id", SingleCollege);

export default CollegeRouter;
