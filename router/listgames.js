var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()

router.post('/', jsonParser, function(req, res){
    user = req.session.user
    var db = req.app.locals.db
    db.collections("games").find({'user': user}).toArray(function(err, result){
        if(err){
            res.json({'status': "ERROR"})
        }
        else{
            games = new Array(result.length)
            for(var i = 0; i<games.length; i++){
                info = {
                    'id': result[i].id,
                    'start_date': result[i].start_date,
                }
                games[i] = info
            }
            res.json({'status': "OK", 'games': games})
        }
    })
})

module.exports = router;