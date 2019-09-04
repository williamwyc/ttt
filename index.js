var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

var play = require("./play.js")

app.use("/play", play)
app.use(express.static(__dirname));

app.get('/ttt', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
})

app.listen(80, function(){
  console.log("Listening...")
})