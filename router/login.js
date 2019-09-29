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
        console.log(req.session)
        if(err || result.length<1){
            res.json({'status': "ERROR"})
        }
        else if(result[0].password == data.password){
            req.session.user = data.username
            res.json({'status': "OK"})
        }
        else{
            res.json({'status': "ERROR"})
        }
    })
})

module.exports = router;