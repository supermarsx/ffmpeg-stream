/* jshint esversion: 6 */

/*
  Stream client configuration
 */
var config = {
  port: 8080 // Server port
};


var express = require('express');
var app = express();

// Setting middleware
app.use(express.static(__dirname + '\\..\\client')); // Serves resources from public folder

console.log('Server started');
var server = app.listen(config.port);
