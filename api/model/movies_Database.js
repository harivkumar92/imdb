const Sequelize = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize(config.db.name, config.db.con_name, config.db.con_password, {
    host: config.db.host,
    dialect: config.db.dialect,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: config.db.port,
        idle: 10000
    }
});

class Movie {
    constructor(){
        this.movieTable;
    }
    createMovieTable(){
        //Create movie table
        this.movieTable = sequelize.define(config.db.movieTableName, {
            movie_id: { type: Sequelize.INTEGER(11), autoIncrement: true, primaryKey: true },
            title: { type: Sequelize.STRING(20)},
            plot: { type: Sequelize.STRING(500)},
            director: { type: Sequelize.STRING(20)},
            writer: { type: Sequelize.STRING(20)},
            stars: { type: Sequelize.STRING(100)},
            rating: { type: Sequelize.FLOAT }
            },{ 
                timestamps: true
            });
        sequelize.sync();  
    }
    //Add json object to sql
    addMovie(jsonObj){
        this.movieTable.create(jsonObj);
    }
}

module.exports = Movie;