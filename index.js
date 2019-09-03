var http = require('http');
var querystring = require('querystring');
 
http.createServer(function (req, res) {
  var post = "";
  req.on('data', function (chunk) {
    post += chunk;
  });
  req.on('end', function () {
    post = querystring.parse(post);
    if(post.name) { 
        res.write(body.name);
    } else {
        res.write({'Content-Type':'index.html'});
    }
  });
}).listen(3000);
