const express = require('express');
const { generateContent } = require('../controllers/generateController');
const router = express.Router();

router.post('/', generateContent);

module.exports = router;
