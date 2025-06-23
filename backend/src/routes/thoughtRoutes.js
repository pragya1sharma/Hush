const express = require("express");
const router = express.Router();
const { createThought } = require("../controllers/thoughtController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createThought);

module.exports = router;
