// August 9, 2018

// Import the express module 
var express = require('express');

// Store the express in a variable
var app = express();

var port = process.env.PORT || 3001;

var bodyParse = require('body-parser');

const http = require('http');
const filesystem = require('fs');

// Setting up the server and extracting the query parameters
const server = http.createServer((request, response) => {

    filesystem.readFile('./index.html', function (error, fileContent) {

        if(error) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.end('Error');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(fileContent);
            response.end();
        }
    });
});

// Telling the server to listen on port 3000
server.listen(3000);

// Support encoded bodies
app.use(bodyParse.urlencoded({ extended: true }));

app.listen(port, function() {
    console.log("Server running at http://127.0.0." + port);
});

// Message is received in this function
app.post('/action', function (request, response) {
    try {
        var email = request.body.email;
        response.send('You send the name "' + email + '".');
    } catch (error) {
        console.error(error);
    }

});
