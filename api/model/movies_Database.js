//const Role = require('../models/role_model');
//const Base = require('../models/BaseClass_model');
//const config = require('f:/Freelance/git/UserManagement/config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('movies', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

class Movie {
    constructor(){
        this.movieTable;
        const movieTemp = 0;
    }
    createMovieTable(){
        this.movieTable = sequelize.define('movieDetails', {
            movie_id: { type: Sequelize.INTEGER(11), autoIncrement: true, primaryKey: true },
            title: { type: Sequelize.STRING(20) },
            plot: { type: Sequelize.STRING(100)},
            director: { type: Sequelize.INTEGER},
            writer: { type: Sequelize.STRING(20), defaultValue: 'inactive' },
            stars: { type: Sequelize.FLOAT(2,1) },
            rating: { type: Sequelize.MEDIUMINT }
            },{ 
                timestamps: true
            });
        sequelize.sync();  
    }

    createTemp(){
        movieTemp = sequelize.define('temp', {
            movie_id: { type: Sequelize.INTEGER(11), autoIncrement: true, primaryKey: true },
            temp: { type: Sequelize.STRING(20) }
            },{ 
                timestamps: true
            });
        sequelize.sync();  
        
    }

    addTemp(obj){
        movieTemp.create({
            temp: "adasda"
        });
    }

    addMovie(jsonObj){
        var temp = this.movieTable.create(jsonObj);;
        return temp;
    }
}

movie = new Movie();
movie.addTemp();
module.exports = movie;