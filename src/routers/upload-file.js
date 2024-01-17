const express = require("express");
const uploadFile = require("../controllers/upload-file");
const router = express.Router();

router.post("/upload", uploadFile);

module.exports = router;
