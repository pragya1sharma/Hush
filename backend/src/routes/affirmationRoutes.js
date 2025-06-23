const express = require('express');
const router = express.Router();
const { getAffirmations } = require('../controllers/affirmationController');
router.post("/", getAffirmations);
module.exports = router;