var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/',function(req,res){
    console.log("Router get Get")
    //res.sendFile(path.join(__dirname+'/play.html'));

})

router.post('/',function(req,res){
    console.log("Router get post")
    console.log(req.data)
    res.sendFile(__dirname+'/play.html');

})

module.exports = router;