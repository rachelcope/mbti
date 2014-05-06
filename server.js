// reference the http module so we can create a webserver
var http = require("http");

var express = require('express');
var app = express();

// New call to compress content
app.use(express.compress());

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);


// create a server
//http.createServer(function(req, res) {
    // on every request, we'll output 'Hello world'
    //res.end("Hello world from Cloud9!");
//}).listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE,
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console
