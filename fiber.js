/**
 * Created by Nodirbek Hojimatov on 10/26/17.
 */
var fs = require("fs");
var path = require('path');
var express = require('express');
var app = express();

app.get('/fibers', function (req, res) {
  fs.readFile("fiber.json", 'utf8', function (err, data) {
    res.end(data);
  });
});

app.use('/public', express.static(path.join(__dirname + '/public')));

var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});