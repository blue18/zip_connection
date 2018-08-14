// August 13, 2018 

var express = require('express');
var app = express();
var api = require('./api');
var port = process.env.PORT || 3000;
var flash = require('connect-flash');

var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// Set up the template engine
app.set('view engine', 'ejs');

// Access all of the files within the 'public' folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session(
    { 
        secret: 'this-is-a-token', 
        resave: false, 
        saveUninitialized: true 
}));

// All routes for the API are written in modules in the api/ directory.  The
// top-level router lives in api/index.js.  That's what we include here, and
// it provides all of the routes.
app.use('/', api);

// Sending the index page
app.get('/', function (request, response) {
    var sessionData = request.session;
    sessionData.name = "joe";
    console.log("You have visited this page: " + sessionData.count);
    response.render('index');
});

// Listen at localhost:3000 
app.listen(port, function() {    
    console.log("Listening at http://localhost:" + port);
});
