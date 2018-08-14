// August 13, 2018 

var express = require('express');
var app = express();
var api = require('./api');
var port = process.env.PORT || 3000;


var bodyParser = require('body-parser');
var morgan = require('morgan');


// Set up the template engine
app.set('view engine', 'ejs');

// Access all of the files within the 'public' folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console


// All routes for the API are written in modules in the api/ directory.  The
// top-level router lives in api/index.js.  That's what we include here, and
// it provides all of the routes.
app.use('/', api);

// Sending the index page
app.get('/', function (request, response) {
    response.render('index');
});

// Listen at localhost:3000 
app.listen(port, function() {    
    console.log("Example app listening at http://localhost:" + port);
});
