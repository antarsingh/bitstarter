var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync('./index.html','utf-8');
  response.send(buf.toString('utf-8',0,buf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
