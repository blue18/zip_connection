// August 9, 2018

const router = module.exports = require('express').Router();
//router.use('/albums', require('./albums').router);
//const router = require('express').Router();


// Import the express module 
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParse = require('body-parser');

// Support encoded bodies
app.use(bodyParse.urlencoded({ extended: true }));

app.listen(port, function() {
    console.log("Server running at http://127.0.0." + port);
});

// Message is received in this function
app.post('/action', function (request, response) {
    try {
        var email = request.body.email;
        var password = request.body.password;
        response.send('You send the email "' + email + '". Password: ' + password );
    } catch (error) {
        console.error(error);
    }
});
