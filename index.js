var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var path = require('path');
var play = require("./play.js")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/ttt", play)
app.use(express.static(__dirname));
app.engine('.html', require('ejs').renderFile);
app.set('views', path.join(__dirname));

app.get('/ttt', function (req, res) {
  res.sendFile( __dirname + "/index.html" );
})

app.listen(3000, function(){
  console.log("Listening...")
})