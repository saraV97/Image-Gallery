import mongoose from "mongoose";
const uploadSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Upload", uploadSchema);
