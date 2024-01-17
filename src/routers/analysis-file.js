const express = require("express");
const { fetchFile } = require("../controllers/analysis-file");
const router = express.Router();

router.get("/analysis", fetchFile);

module.exports = router;
