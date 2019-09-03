const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const querystring = require("querystring");

var root = path.resolve();

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  var filepath = path.join(root,pathname);
  fs.stat(filepath,function(err,stats){
    if(err){
        res.writeHead(404);
        res.end("404 Not Found.");
    }else{
        res.writeHead(200);
        fs.createReadStream(filepath).pipe(res);
    }
  })
  var post = "";
  req.on('data', function (chunk) {
    post += chunk;
  });
  req.on('end', function () {
    post = querystring.parse(post);
    if(post.name) {
      res.write(body.name);
  } else { 
      
  }
  });
}).listen(3000, function(){
  console.log('Listening...')
});
