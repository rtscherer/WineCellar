// SCHERER DEVELOPMENT
// app/models/wine.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = new Schema({
    userId: String,
    listId: String,
    lastUpdate: Date,
    list: [{
      name: String,
      description: String,
      type: String,
      masterVarietal: String,
      country: String,
      region: String,
      subRegion: String,
      vineyard: String,
      year: String,
      vintage: String,
      size: Number,
      image: String,
      notes: String,
      price: String,
      quantity: Number,
      peakDate: Date,
      consumptionStart: Date,
      consumptionEnd: Date,
      personalScore: Number,
      isFavorite: Boolean }]
});

module.exports = mongoose.model('Wine', WineSchema);