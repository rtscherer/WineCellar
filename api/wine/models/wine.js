// SCHERER DEVELOPMENT
// app/models/wine.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = new Schema({
    userId: String,
    listId: String,
    list: [{
      name: String,
      description: String,
      type: String,
      country: String,
      region: String,
      year: String,
      vintage: String,
      image: String,
      notes: String,
      price: String,
      lastUpdate: Date }]
});

module.exports = mongoose.model('Wine', WineSchema);