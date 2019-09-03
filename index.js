var http = require('http');
var querystring = require('querystring');
 
http.createServer(function (req, res) {
  var post = "";
  req.on('data', function (chunk) {
    post += chunk;
  });
  req.on('end', function () {
    post = querystring.parse(post);
    if(post.name) { // 输出提交的数据
        res.write(body.name);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(80);