'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
let api = require('./routes/api');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');
     next();
 });
 app.use('/api', api);
 
 
 module.exports = app;
