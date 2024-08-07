import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import UserRouter from "./routes/user.routes.js";

const PORT = process.env.PORT || 3001;

const __dirname = path.resolve();
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", UserRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
