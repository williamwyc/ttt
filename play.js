var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()
var name;

router.get('/play',function(req,res){
    console.log("Router get get")
    res.sendFile( __dirname + "/play.html" );
})

router.post('/',jsonParser,function(req,res){
    console.log("Router get post")
    console.log(req.body)
    name = req.body.name
    return res.json({
        name: name,
        date: Date()
    })
})

router.post('/play',jsonParser,function(req,res){
    console.log("Getting name")
    res.json({
        name: name,
        date: Date()
    })
    console.log("Json Sent")
})

module.exports = router;