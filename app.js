var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();
var port = 8888;

app.use(morgan('tiny'));

app.get('/', function(req, res){
    res.send('Hello from my library app');
});

app.listen(port, function(){
    debug(`listening on port ${chalk.green(port)}`);
})