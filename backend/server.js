import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from "cors";

import UserRouter from "./routes/user.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.use("/api/users", UserRouter);

// app.use(express.static(path.join(__dirname, "/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
