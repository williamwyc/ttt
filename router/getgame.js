var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()

router.post('/', jsonParser, function(req, res){
    id = req.data.id
    db.collection("games").find({'id': id}).toArray(function(err, result){
        if(err || result.length!=1){
            res.json({'status': "ERROR"})
        }
        else{
            res.json({'status': "OK", 'grid': result[0].grid, 'winner': result[0].winner})
        }
    })
})

module.exports = router;