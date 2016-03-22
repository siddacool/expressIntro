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

