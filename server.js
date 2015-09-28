var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.listen(5000, function() {
  console.log('It\'s alive on port 5000.');
});
