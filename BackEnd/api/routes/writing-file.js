const express = require('express');
const router = express.Router();
const writingFileController = require('../controllers/writing-file');

router.get('/writingFile/:data',writingFileController.writingFileController);

module.exports = router;