var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var path = require('path');
var MongoClient = require('mongodb').MongoClient;


var play = require("./router/play.js")
var adduser = require("./router/adduser.js")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/ttt", play)
app.use("/adduser", adduser)
app.use("/verify", verify)
app.use(express.static(__dirname));

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname));
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/html/index.html" );
})

MongoClient.connect('mongodb://130.245.168.51:27017',function(err,db){
  if (err){
    throw err;
  }
  console.log('Mongodb Connected');
  app.locals.db = db.db('ttt');
  app.listen(3000, function(){
    console.log("Listening...")
  })
})