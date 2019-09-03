const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const querystring = require("querystring");

var root = path.resolve();

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  var filepath = path.join(root,pathname);
  console.log(filepath);
  var post = "";
  req.on('request', function(req,res){
    //var url = request.url
    response.writeHead(200,{'Content-Type':'text/html'})
    console.log("1:"+filepath);
    fs.readFile(filepath,function(err,data){
      if(err){
          throw err ;
      }
      response.end(data);
    })
  });
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
