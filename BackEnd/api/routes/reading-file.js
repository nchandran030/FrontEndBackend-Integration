const express = require('express');
const router = express.Router();
const readingFileController = require('../controllers/reading-file');

router.get('/readingFile',readingFileController.readingFileController);
module.exports = router;