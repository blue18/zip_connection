// August 9, 2018

const url = require('url');
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
