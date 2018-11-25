
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

//Extracts JSON data and makes it easily readable
app.use(bodyParser.json());    

app.use(bodyParser.urlencoded({
    extended: true
 }));
/*
//Adjusts response to Client (CORS errors)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Handles a route which couldnt be found
app.use((req, res, next) => {                     
    const error = new Error('Not found');
    error.status = 404;
    next(error);                                  //Forwards the error request
})

//Handles errors thrown from anywhere in the app
app.use((error, req, res, next) => {            
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})
*/

//Makes an exception in Express to allow for the files under HTML_FILE folder
//app.use('/html', express.static(__dirname + '/HTML_FILE'));

//app.use('/html', express.static(__dirname + '/api/view/'));

app.use('/', express.static(__dirname + '/api/view'));


module.exports = app;
