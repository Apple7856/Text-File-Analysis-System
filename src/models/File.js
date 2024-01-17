const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const File = mongoose.model("Files", FileSchema);
module.exports = File;
