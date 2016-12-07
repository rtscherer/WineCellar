var app = require('./packages').app();
var port = require('./properties').port();
var config = require('../config');

// start the server
module.exports = {
    start: function() {
        app.listen(config.port);
        console.log('RUNNING: api running on port: ' + config.port);
    }
};