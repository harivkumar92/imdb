
const express = require("express");
const bodyParser = require('body-parser');
//Enables Express web framework
const app = express();  
const Database = require('./api/model/movies_CheckDB');
var routes = require('./api/route/form_route');

//Checks if database exists. If it doesn't, create one
Database.createDatabase();

//Extracts JSON data and makes it easy to read
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
 }));

 //Allows the server to accept 'index.html' as valid on route '/'
app.use('/', express.static(__dirname + '/api/view'));

//Enables the route procedures in form_route.js
app.use('/api', routes)

module.exports = app;