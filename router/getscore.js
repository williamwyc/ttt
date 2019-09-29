var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()

router.post('/', jsonParser, function(req, res){
    user = req.session.user
    var db = req.app.locals.db
    db.collection("games").find({'user': user}).toArray(function(err, result){
        if(err){
            res.json({'status': "ERROR"})
        }
        else{
            var human = 0
            var tie = 0
            var wopr = 0
            for(var i = 0; i<result.length; i++){
                winner = result[i].winner
                if(winner = "X"){
                    human ++;
                }
                else if (winner = "O"){
                    wopr ++;
                }
                else{
                    tie ++;
                }
            }
            res.json({'status': "OK", 'human': human, 'wopr': wopr, 'tie': tie})
        }
    })
})

module.exports = router;