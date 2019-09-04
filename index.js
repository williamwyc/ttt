var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use("/page",express.static(__dirname + '/page'));
app.use("/script",express.static(__dirname + '/script'));
app.use(express.static(__dirname));
app.use()
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/page" + "/index.html" );
})

app.listen(3000, function(){
  console.log("Listening...")
})