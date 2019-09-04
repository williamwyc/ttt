var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()
var name = null;
var date = null;


router.get('/',function(req,res){
    console.log("Router get get")
    res.sendFile( __dirname + "/play.html" );
})

router.post('/',jsonParser,function(req,res){
    console.log("Router get post") //1
    console.log(req.body)
    res.json({})
    console.log("Json Sent")
})

module.exports = router;