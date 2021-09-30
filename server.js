'use strict';

require('dotenv').config();

const express = require('express');
const server = express();
const proxy = require('proxy-middleware');
const { URL } = require('url');
const path = require('path');
const morgan = require('morgan');
const open = require('open');
const API_URL = process.env.API_URL || 'http://localhost:5555/';
const CLIENT_PORT = process.env.PORT || 5000;

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, maximum-scale = 1.0">

        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">

        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </head>

    <body>

        <div id="root" class="root-entry"></div>

        <script src="/bundle.js"></script>

    </body>

</html>
`;

if (process.env.NODE_ENV !== 'production') {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpack = require('webpack');

    const config = require('./webpack/webpack.config.dev');
    const compiler = webpack(config);
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    });

    const logger = morgan('dev');

    server.use(middleware);
    server.use(logger);

    // Apply hot module reloading middleware
    server.use(webpackHotMiddleware(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));

    // start localhost server on CLIENT_PORT
    server.listen(CLIENT_PORT, function() {
        middleware.waitUntilValid(function(){
            open('http://localhost:' + CLIENT_PORT);
            console.log(process.env.NODE_ENV + ' server listening at localhost:' + CLIENT_PORT);
        });
    });

    // Proxy settings for connecting to API
    // process.env.API_URL is an environment variable set on the server environment
    server.use('/api', proxy(new URL(API_URL)));

    // serve the app's index.html file when accessing any path
    server.get('*', function(req, res) {
        res.write(htmlTemplate);
        res.end();
    });

} else {

    const logger = morgan('short');

    server.use(express.static(path.resolve(__dirname, 'dist')));
    server.use(logger);

    server.listen(CLIENT_PORT, function() {
        console.log('PRODUCTION server listening at localhost:' + CLIENT_PORT);
    });

    server.use('/api', proxy(new URL(API_URL)));

    server.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });

}
