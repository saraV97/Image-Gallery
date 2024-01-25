import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import uploadRoute from "./routes/uploadRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const port = process.env.port || 4000;

mongoose.connect(process.env.MONGO_URI),
  () => {
    console.log("MongoDB connected...");
  };
console.log(mongoose.connection.readyState);
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use(uploadRoute);
app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
