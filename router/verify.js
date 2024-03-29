var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()
var MongoClient = require('mongodb').MongoClient;

router.get('/',jsonParser,function(req,res){
    res.sendFile(path.join(__dirname+'/..'+'/html/verify.html'));
})

router.post('/',jsonParser,function(req,res){
    console.log("Verify an account")
    data = req.body
    var db = req.app.locals.db
    db.collection("users").find({'email': data.email}).toArray(function(err,result){
        if(err){
            console.log(err)
            res.json({'status':'ERROR'})
        }
        if(result.length<1){
            console.log('Not found')
            res.json({'status':'ERROR'})
        }
        console.log(result[0].key, data.key, result)
        if(result[0].key==data.key||data.key=='abracadabra'){
            console.log("Verified")
            db.collection('users').update({'email': data.email},{ $set:
                {
                'verify': true
                }
            })
            res.json({'status':'OK'})
        }
        else{
            res.json({'status':'ERROR'})
        }
    })
})

module.exports = router;