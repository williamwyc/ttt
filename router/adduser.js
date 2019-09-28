var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()
var MongoClient = require('mongodb').MongoClient;
var nodemailer = require('nodemailer');

router.get('/',jsonParser,function(req,res){
    res.sendFile(path.join(__dirname+'/..'+'/html/adduser.html'));
})

router.post('/',jsonParser,function(req,res){
    data = req.body
    data.key = Math.floor((Math.random() * 8999) + 1000);
    data.verify = false
    var db = req.app.locals.db
    db.collection("users").insertOne(data, function(err, result){
        if(err){
            res.json({'status':"ERROR"})
        }
        var transporter = nodemailer.createTransport({
            host: 'localhost',
            port: 25,
            tls: {
                rejectUnauthorized: false
            }
        });  
        var mailOptions = {
            from: 'ubuntu@arknights.com',
            to: data.email,
            subject: 'TTT Game: Verify your account',
            text: "validation key: <" + data.key + ">",
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        console.log("User created")
        res.json({'status':"OK"})
    })
})

module.exports = router;