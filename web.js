var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(hello);
   var buffer = fs.readFile('/index.html');
   var hello =buffer.toString();
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
