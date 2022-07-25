// Importing http core package/module provided by nodejs

var http = require('http');

// Creating a server

http.createServer(function (req, res) {

// // Write response as Html(text)

// res.writeHead(200, {'Content-Type': 'text/html'});

// // Writing static text

// res.end('Hello World');



 res.writeHead(301, {
    Location: `https://thankful-grass-0c6e2380f.1.azurestaticapps.net/`
  }).end();

// Server listening on port number 4200

}).listen(80);