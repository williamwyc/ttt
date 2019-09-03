var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var unlencodedParser = bodyParser.unlencoded({extended: false})

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
 
    var response =  "first_name"+req.body.name
    console.log("Name: "+response);
    res.end(JSON.stringify(response));
})

var server = app.listen(3000, function () {
    console.log("Listening...");
})