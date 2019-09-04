var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/play',function(req,res){
    res.sendFile(path.join(__dirname+'/..'+'/html/ttt.html'));

})

module.exports = router;