// SCHERER DEVELOPMENT
// app/routes/wine.js

var express = require('express');
var router = express.Router();
var wineController = require('../controllers/wineController');

// logging that dealership router was called
router.use(function (req, res, next) {
   console.log('\nWine Router Has Been Called');
   console.log('---------------------------------')
   console.log('Request URL:', req.originalUrl);
   console.log('Request Type:', req.method);
   console.log('Time:', Date.now());
   next();
});

router.route('/wine')
    // GET api/wine
    .get(wineController.get)
    
    // POST api/wine
    .post(wineController.post);

router.route('/wine/:wine_id')
    // GET api/wine/:wine_id
    .get(wineController.getById)
    
    // PUT api/wine/:wine_id
    .put(wineController.put)
    
    // DELETE api/wine/:wine_id
    .delete(wineController.deleteById);

module.exports = router;