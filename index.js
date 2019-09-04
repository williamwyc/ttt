var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var name = require('/name.js');
var play = require('/play.js')


app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.listen(3000, function(){
  console.log("Listening...")
})