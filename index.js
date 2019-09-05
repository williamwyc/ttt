var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

var play = require("./play.js")

app.use("/ttt", play)
app.use(express.static(__dirname));

app.get('/ttt', function (req, res) {
    console.log("Sending File "+__dirname + "/index.html")
    res.sendFile( __dirname + "/index.html" );
})

app.listen(3000, function(){
  console.log("Listening...")
})