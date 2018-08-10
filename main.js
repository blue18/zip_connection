// August 9, 2018
const express = require('express');
var app = express();
const bodyParse = require('body-parser');
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


app.use(bodyParse.urlencoded({ extended: true }));

// Message is received in this function
app.post('/action', (request, response) => {
    response.send('You send the name "' + request.body.email + '".');
    console.log(request.body.email);
});

app.listen(3001, function() {
    console.log("Server running at http://127.0.0.1:3001/")
})


