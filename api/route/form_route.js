const express = require('express');
const router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var moviedb = require('../model/movies_Database');
var app = express();

router.get('/create', (req, res, next) => {
    var title, plot, director, writer, stars, rating;
    var url = 'https://www.imdb.com/title/tt1375666/';
    var jsonMovie = { 
        title: "", 
        plot: "", 
        director: "",
        writer: "",
        stars: "",
        rating: ""
    };

    var temp = {
        title: ""
    };

    request(url, function(error, response, html) {

        // First we'll check to make sure no errors occurred when making the request

        if(!error) {
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            $('.title_wrapper').filter(function() {
                var data = $(this);
                title = data.children().first().text();
            });
            jsonMovie.title = title;
            temp.title = title;
            console.log(temp);
            moviedb.addTemp(temp);
            
        }
    });
});


router.post('/api/create', (req, res, next) => {
    var request = req;
    var response = res;

   
});


module.exports = router;
