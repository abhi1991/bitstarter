var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
   var fs = require('fs');
   var buffer = new Buffer(fs.readFileSync('index.html','utf8'));
   var hello =buffer.toString();
   response.send(hello);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
