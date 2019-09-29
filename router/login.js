var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()
var MongoClient = require('mongodb').MongoClient;

router.get('/',jsonParser,function(req,res){
    res.sendFile(path.join(__dirname+'/..'+'/html/index.html'));
})

router.post('/',jsonParser,function(req,res){
    data = req.body
    var db = req.app.locals.db
    db.collection("users").find({'username': data.username}).toArray(function(err, result){
        if(err || result.length<1){
            console.log(err)
            console.log("LEN")
            res.json({'status': "ERROR"})
        }
        console.log(result[0])
        if(result[0].password == data.password && result[0].verify == true){
            req.session.user = data.username
            console.log("User login: "+req.session.user)
            res.json({'status': "OK"})
        }
        else{
            console.log("Wrong pwd or not Verified")
            res.json({'status': "ERROR"})
        }
    })
})

module.exports = router;