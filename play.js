var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()

router.post('/',jsonParser,function(req,res){
    console.log("Router get post") //1
    console.log(req.body)
    res.json()
    res.sendFile(__dirname+'/play.html')

})

module.exports = router;