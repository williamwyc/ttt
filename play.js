var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({extended: false})
var jsonParser = bodyParser.json()
var name;

// router.get('/',function(req,res){
//     console.log("Router get get")
//     res.sendFile( __dirname + "/play.html" );
// })

router.post('/',jsonParser,function(req,res){
    if(req.body.name!= null){
        name = req.body.name
    }
    res.sendFile( __dirname + "/play.html" );
    // console.log("Sent JSON")
    // res.json({
    //     'name': name,
    //     'date': Date()
    // })
    
})

router.post('/play',jsonParser,function(req,res){
    grid = req.body.grid
    winner = check(grid)
    if(winner == null){
        grid = move(grid)
    }
    res.json({
        'winner': winner,
        'grid': grid
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
}

module.exports = router;