const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const uploadRoutes = require("./routers/upload-file");
const analysisRoutes = require("./routers/analysis-file");
require("dotenv").config();

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "file-storage");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === "text/plain") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});
app.use("/files", express.static(path.join(__dirname, "../file-storage")));

app.use("/data/api/v1", upload.single("text-file"), uploadRoutes);
app.use("/data/api/v1", analysisRoutes);

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((error) => {
    console.log({ error });
  });

app.listen(port, () => {
  console.log(`Server is running on port no. ${port}`);
});
