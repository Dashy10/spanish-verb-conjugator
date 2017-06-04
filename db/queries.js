var pgp = require('pg-promise')();
var connString = process.env.DATABASE_URL;

// console.log(connString);
var db = pgp(connString);
