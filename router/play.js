var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()

// router.post('/',jsonParser,function(req,res){
//     console.log("Post Req")
//     console.log(req.body)
//     res.render('play', {
//         'name': req.body.name,
//         'date': Date()
//     })
// })

router.get('/',jsonParser,function(req,res){
    if(req.session.user!=null){
        res.sendFile(path.join(__dirname+'/..'+'/html/play.html'));
    }
    else{
        res.redirect('/');
    }
})

router.post('/',jsonParser,function(req,res){
    if(req.session.user!=null){
        res.sendFile(path.join(__dirname+'/..'+'/html/play.html'));
    }
    else{
        res.redirect('/');
    }
})

// router.post('/play',jsonParser,function(req,res){
//     grid = req.body.grid
//     grid = move(grid)
//     winner = check(grid)
//     res.json({
//         'winner': winner,
//         'grid': grid
//     })
// })

router.post('/play',jsonParser,function(req,res){
    data = req.body
    var db = req.app.locals.db
    var user = req.session.user
    var move = data.move
    db.collection("users").find({'username': user}).toArray(function(err, result){
        if(err || result.length<1){
            res.json({'status': "ERROR"})
        }
        grid = result[0].grid;
        if(move != null){
            grid[move] = "X"
        }
        winner = check(grid)
        if(winner == null){
            grid = move(grid)
            winner = check(grid)
        }
        db.collection('users').update({'username': user},{ $set:
            {
            'grid': grid
            }
        })
        if(winner != null){
            start_date = Date()
            game = {
                'id': user+start_date,
                'start_date': start_date,
                'grid': grid,
                'winner': winner,
                'user': user
            }

            db.collection('games').insertOne(game, function(err, result){
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Add a game")
                }
            })

            db.collection('user').update({'username': user},{ $set:
                {
                'grid': [" ", " ", " ", " ", " ", " ", " ", " ", " "]
                }
            })
        }
        res.json({
            'winner': winner,
            'grid': grid
        })
    })
})

function check(grid){
    for(var i=0;i<7;i+=3){
        if(grid[i]==grid[i+1]&&grid[i+1]==grid[i+2]&&grid[i]!=" "){
            return grid[i]               
        }
    }
    for(var i=0;i<3;i++){
        if(grid[i]==grid[i+3]&&grid[i+3]==grid[i+6]&&grid[i]!=" "){
            return grid[i]               
        }
    }
    if(grid[0]==grid[4]&&grid[4]==grid[8]&&grid[0]!=" "){
        return grid[0]             
    }
    if(grid[2]==grid[4]&&grid[4]==grid[6]&&grid[2]!=" "){
        return grid[2]               
    }
    for(var i=0; i<grid.length; i++){
        if(grid[i] == " "){
            return null
        }
    }
    return " "
    
}

function move(grid){
    for(i = 0;i<9;i++){
        if(grid[i]== ' '){
          grid[i]= "O"
          return grid
        }
    }
    return grid
}

module.exports = router;