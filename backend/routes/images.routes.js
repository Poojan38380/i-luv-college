import express from "express";
import {
  addImageToCollege,
  getCollegeImages,
} from "../controllers/images.controller.js";
import protectRoute from "../middlewares/ProtectRoute.js";

const ImageRouter = express.Router();

ImageRouter.post("/add/:collegeId", protectRoute, addImageToCollege);
ImageRouter.get("/allimages/:collegeId", getCollegeImages);

export default ImageRouter;
