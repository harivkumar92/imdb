//Ensuring that a database of a name in file config.json exists
const Sequelize = require('sequelize');
//const config = require('f:/Freelance/git/UserManagement/config');
//const user = require('../models/user_model');
//const role = require('../models/role_model');
const movie = require('./movies_Database');
const sequelizeCheck = new Sequelize('', 'user', 'password', {
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

class Database{
    createDatabase(){
        sequelizeCheck
            .authenticate()
            .then(() => { 
                console.log('Connected to the web server');
                //Database Creation
                sequelizeCheck
                    .query("CREATE DATABASE IF NOT EXISTS movies;")
                    .then(() => {
                        console.log('Database is ready');
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
database.createDatabase();
module.exports = Database;