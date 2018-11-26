const config = {
    app: {
      port: 3000
    },
    db: {
      host: 'localhost',
      port: 30000,
      name: 'movies',
      con_name: 'user',
      con_password: 'password',
      dialect: 'mysql',
      movieTableName : 'movieDetails'
    }
};

module.exports = config;