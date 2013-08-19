var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(hello);
   var bf = fs.readFile('/index.html');
	var buffer = new Buffer(bf);
	var hello =buffer.toString();
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
