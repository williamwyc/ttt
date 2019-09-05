var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()
var name;
var date;

router.get('/play',function(req,res){
    console.log("Router get get")
    res.sendFile( __dirname + "/play.html" );
})

router.post('/',jsonParser,function(req,res){
    console.log("Router get post")
    if(req.body!= null && req.body.date!=null){
        name = req.body.name
        date = req.body.date
    }
    console.log(name,date)
    res.sendFile(__dirname + "/../play.html");
})

router.post('/play',jsonParser,function(req,res){
    console.log("Getting name")
    res.json({
        name: name,
        date: date
    })
    console.log("Json Sent")
})

module.exports = router;