var express = require('express');

var app = express();

var port = 5000;

app.listen(port, function() {
    console.log('Journey server listening on port 5000');
});

app.get('/', function(req, res) {
    res.send('Invalid point');
})