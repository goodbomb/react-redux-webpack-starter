'use strict';

var express = require('express');
var url = require('url');
var path = require('path');
var proxy = require('proxy-middleware');
var server = express();
var API_URL = process.env.API_URL || 'http://localhost:9000/';

server.set('port', (process.env.VIU_PORT || 5000));
server.use(express.static(path.resolve(__dirname, 'dist')));

server.listen(server.get('port'), function() {
    console.log('Production Server listening at localhost:' + server.get('port'));
});

// Proxy settings for connecting to API
// process.env.API_URL is an environment variable set on the server environment
server.use('/api', proxy(url.parse(API_URL)));
