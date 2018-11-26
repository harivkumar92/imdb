const Sequelize = require('sequelize');
const movieclass = require('./movies_Database');
const config = require('../config');
movie = new movieclass();
const sequelizeCheck = new Sequelize('', config.db.con_name, config.db.con_password, {
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
//Check if database exists before every API execution 
class Database{
    createDatabase(){
        sequelizeCheck
            .authenticate()
            .then(() => { 
                console.log('Connected to the web server');
                //Create Database - this check is performed on every execution
                sequelizeCheck
                    .query("CREATE DATABASE IF NOT EXISTS movies;")
                    .then(() => {
                        console.log('Database is ready');
                        //Create movie table
                        movie.createMovieTable();
                    })
                    .catch(err => {
                        console.error(err);
                    })
                    .finally(() => {
                        sequelizeCheck.close();
                    })
            })
            .catch(err => {
                console.error('Unable to connect to the web server: ', err);
            });
    }
}

database = new Database();
module.exports = database;