var express = require('express');

var app = express();
var port = 8888;

app.get('/', function(req, res){
    res.send('Hello from my library app');
});

app.listen(port, function(){
    console.log('listening on port ' + port);
})