const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const fileManipulationReadingRoutes = require('./api/routes/reading-file');
const fileManipulationWritingRoutes = require('./api/routes/writing-file');

app.use('/api', fileManipulationReadingRoutes);
app.use('/api', fileManipulationWritingRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    next(error);
});

app.use((error, req, res, next) => {
    res.json({
        message: error.message
    })
});

module.exports = app;