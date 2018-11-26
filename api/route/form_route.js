const express = require('express');
const router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var moviedb = require('../model/movies_Database');
var app = express();
movie = new moviedb();


//Control goes here when client naviagates to localhost:3000/api/create
//api is on a seperate route for better real-time functionality
router.post('/create', (req, res, next) => {
    var title, plot, director, writer, stars, rating;
    var url = req.body.url;
    var jsonMovie = { 
        title: "", 
        plot: "", 
        director: "",
        writer: "",
        stars: "",
        rating: ""
    };

    //Request module takes in a url and returns the full html in the callback
    request(url, function(error, response, html) {

        if(!error) {
            //Load the html into cheerio so we can access elements easily using ajax
            var $ = cheerio.load(html);

            //Fetch movie title - Making Ajax calls to retreive DOM element, store into jsonMovie object
            $('.title_wrapper').filter(function() {
                let data = $(this);
                title = data.children().first().text();
            });
            jsonMovie.title = title;
            console.log(jsonMovie.title);

            //Fetch movie plot
            $('.summary_text').filter(function() {
                let data = $(this);
                plot = data.text();
            });
            jsonMovie.plot = plot;
            console.log(jsonMovie.plot);

            //Fetch movie director
            $('.summary_text').filter(function() {
                let data = $(this);
                director = data.next().children().next().text();
                console.log("director : ",director);
            })
            jsonMovie.director = director;

            //Fetch movie writer
            $('.summary_text').filter(function() {
                let data = $(this);
                writer = data.next().next().children().next().text();
                console.log("writer: ", writer);
            })
            jsonMovie.writer = writer;

            //Fetch movie stars
            $('.summary_text').filter(function() {
                let data = $(this);
                stars = data.next().next().next().children().nextUntil().prevUntil('.inline').text();
                console.log("stars: ",stars);
            })
            jsonMovie.stars = stars;

            //Fetch movie rating
            $('.ratingValue').filter(function() {
                let data = $(this);
                rating = data.children().children().text();
                console.log("rating: ",rating);
            })
            jsonMovie.rating = rating;

            //Send the json object to model where it gets stored in mysql
            movie.addMovie(jsonMovie);
        }
        //provide final json as response back to client
        res.send(jsonMovie);
    });
});

module.exports = router;
