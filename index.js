const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const querystring = require("querystring");

var root = path.resolve();

var server = http.createServer();

server.on('request', function(req,res){
  // var pathname = url.parse(req.url).pathname;
  // var filepath = path.join(root,pathname);
  res.writeHead(200,{'Content-Type':'text/html'})
  fs.readFile('./index.html',function(err,data){
    if(err){
        throw err
    }
    response.end(data);
  })
});
server.listen(3000, function(){
  console.log('Listening...')
});

// (function (req, res) {
//   req.on('data', function (chunk) {
//     post += chunk;
//   });
//   req.on('end', function () {
//     post = querystring.parse(post);
//     if(post.name) {
//       res.write(body.name);
//   } else { 
      
//   }
//   });
// }).listen(3000, function(){
//   console.log('Listening...')
// });
