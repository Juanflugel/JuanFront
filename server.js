var express = require('express');
var app = express();
var port = 5000;
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/dist'));


app.listen(5000, function () {
  console.log('Example app listening on port '+ port);
});