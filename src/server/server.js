// Simple Express server setup to serve for local testing/dev API server
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet(),compression(),express.json());

//
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
const SERVER_URL = `http://${HOST}:${PORT}`;
// const DIST_DIR = './dist';
const DIST_DIR = './src/client';

// Use SPA and ignore any url path locations and always serves index
app.use('*',(req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: ${SERVER_URL}`
    )
);