// SCHERER DEVELOPMENT
// app/controllers/wineController.js

var Wine = require('../models/wine');

module.exports = {
    // get all wines
    get: function (req, res) {
        Wine.find(function (err, wines) {
            if (err)
                console.log(err);

            res.json(wines);
        });
    },

    // create a new wine
    post: function (req, res) {
        var wine = new Wine();

        wine.brand = req.body.brand;
        wine.description = req.body.description;
        wine.type = req.body.type;
        wine.country = req.body.country;
        wine.region = req.body.region;
        wine.year = req.body.year;
        wine.vintage = req.body.vintage;
        wine.image = req.body.image;
        wine.notes = req.body.notes;
        wine.price = req.body.price;
        wine.lastUpdate = Date.now();
        
        wine.save(function (err) {
            if (err)
                console.log(err);
            else
            {
                res.json({ message: 'Wine Created!' });
                console.log("Wine Created. Information: " + wine.brand + " " + wine.type);
            }
        });
    },

    // get a wine by id
    getById: function(req, res) {
        Wine.findById(req.params.wine_id, function(err, wine) {
            if (err)
                console.log(err);
                
            res.json(wine);
        });
    },

    // update a wine by id
    put: function(req, res) {
        var wineId = req.params.wine_id;
        
        Wine.findById(wineId, function(err, wine) {

            if (err)
                console.log(err);

            wine.brand = req.body.brand;
            wine.description = req.body.description;
            wine.type = req.body.type;
            wine.country = req.body.country;
            wine.region = req.body.region;
            wine.year = req.body.year;
            wine.vintage = req.body.vintage;
            wine.image = req.body.image;
            wine.notes = req.body.notes;
            wine.price = req.body.price;
            wine.lastUpdate = Date.now();
            
            wine.save(function(err) {
                if (err)
                    console.log(err);

                res.json({ message: 'Wine Updated: ' +  wineId });
            });

        });
    },

    // delete a wine by id
    deleteById: function(req, res) {
        Wine.remove({ _id: req.params.wine_id }, function(err, wine) {
            if (err)
                console.log(err);

            res.json({ message: 'Wine Deleted' });
        });
    }
};