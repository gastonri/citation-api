const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const dbDomain = process.env.DB_DOMAIN;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const connectionString = 'mongodb://' + dbUser + ':' + dbPassword + '@' + dbDomain + ':' + dbPort + '/' + dbName;


function connectDb() {
  mongoose.connect(connectionString, {
    useNewUrlParser: true
  });

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected to database!');
  });
}


module.exports = connectDb;