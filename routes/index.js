var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mosaic 3rd Sector Consulting' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* router.get('/resources', function(req, res, next) {
  res.render('resources', { title: 'Resources/Information' });
});*/


module.exports = router;
