import { Router } from "express";
import uploadMiddleware from "../middleware/multermiddleware.js";
import uploadModel from "../models/uploadModel.js";

const router = Router();

router.get("/api/get", async (req, res) => {
  const allPhotos = await uploadModel.find().sort({ createdAt: "descending" });
  res.send(allPhotos);
});

router.post("/api/save", uploadMiddleware.single("photo"), (req, res) => {
  const photo = req.file.filename;
  console.log(photo);

  uploadModel.create({ photo }).then((data) => {
    console.log("uploaded successfully");
    console.log(data);
    res.send(data);
  });
});
export default router;
