var express = require('express');
var app = express();
var path = require('path');
var api = require('./api');
var port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
 * All routes for the API are written in modules in the api/ directory.  The
 * top-level router lives in api/index.js.  That's what we include here, and
 * it provides all of the routes.
 */
app.use('/', api);



app.listen(port, function() {    
    console.log("Example app listening at http://localhost:" + port);
});

// Sending the index page
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

