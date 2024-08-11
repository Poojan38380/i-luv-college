import express from "express";
import { addImageToCollege } from "../controllers/images.controller.js";

const ImageRouter = express.Router();

ImageRouter.post("/college/:collegeId", addImageToCollege);

export default ImageRouter;
