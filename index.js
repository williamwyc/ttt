var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

var play = require("./play.js")

app.use("/ttt", play)
app.use(express.static(__dirname));

app.get('/ttt', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
})

app.post('/ttt',jsonParser,function(req,res){
  console.log("Router get post")
  console.log(req)
  console.log(req.body)
  if(req.body.name!= null){
      name = req.body.name
  }
  return res.json({
      name: name,
      date: Date()
  })
  
})

app.listen(3000, function(){
  console.log("Listening...")
})