var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var cookieSession = require('cookie-session');

var play = require("./router/play.js")
var adduser = require("./router/adduser.js")
var verify = require("./router/verify.js")
var login = require("./router/login.js")
var logout = require("./router/logout.js")
var listgames = require("./router/listgames.js")
var getgame = require("./router/getgame.js")
var getscore = require("./router/getscore.js")

app.use(cookieSession({
  name: 'session',
  keys: ['amiya'],
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/ttt", play)
app.use("/adduser", adduser)
app.use("/verify", verify)
app.use("/login", login)
app.use("/logout", logout)
app.use("/listgames", listgames)
app.use("/getgame", getgame)
app.use("/getscore", getscore)
app.use(express.static(__dirname));

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname));
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/html/index.html" );
})

MongoClient.connect('mongodb://localhost:27017',function(err,client){
  if (err){
    throw err;
  }
  console.log('Mongodb Connected');
  app.locals.db = client.db('ttt');
  app.listen(3000, function(){
    console.log("Listening...")
  })
})