module.exports = {
    mongoose: function() {
        return require('mongoose');
    },

    app: function() {
        var express = require('express');
        var app = express();
        var bodyParser = require('body-parser');

        // configure bodyParser for POST
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        // assign route paths
        var wineRouter = require('../api/wine/routes/wine');
        app.use('/api', wineRouter);

        return app;
    }
};