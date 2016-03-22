var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// config app
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
// use middleware

app.use(express.static(path.join(__dirname,'public/')));

app.use(bodyParser.urlencoded({
  extended: true
}));



// define routes

app.use(require('./todos'));



app.listen(1337,function(){
    console.log('yo mama 1337');
});


//const http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 1337;
//
//http.createServer((req, res) => {
//  res.writeHead(200, { 'Content-Type': 'text/plain' });
//  res.end('Hello World\n');
//}).listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});