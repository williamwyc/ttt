var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.listen(3000, function(){
  console.log("Listening...")
})