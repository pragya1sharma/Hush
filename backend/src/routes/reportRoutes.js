const express = require("express");
const router = express.Router();
const { analyzeThought } = require("../controllers/reportController");

router.post("/analyze", analyzeThought);

module.exports = router;
