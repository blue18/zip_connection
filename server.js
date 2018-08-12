var express = require('express');
var app = express();
var path = require('path');
var api = require('./api');

/*
 * All routes for the API are written in modules in the api/ directory.  The
 * top-level router lives in api/index.js.  That's what we include here, and
 * it provides all of the routes.
 */
app.use('/', api);

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:$s", host, port);
});

// Sending the index page
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});