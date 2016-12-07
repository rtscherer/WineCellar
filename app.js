// SCHERER DEVELOPMENT
// WINECELLAR PROTOTYPE API
// app.js

// connect to the database
var database = require('./common/database');
database.connect();

// start the server
var server = require('./common/server');
server.start();