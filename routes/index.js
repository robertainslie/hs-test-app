var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HubSpot' });
});

router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

router.post('/accept-form-submission', function(req, res, next) {
	var firstname = {firstname: req.body.firstname};
	var lastname = {lastname: req.body.lastname};
	var email = {email: req.body.email};
	request.post('https://forms.hubspot.com/uploads/form/v2/203693/293f3623-cc14-415e-87b3-70978616cdca').form(email,firstname,lastname);
    res.render('helloworld', { title: 'Hello, '+ req.body.firstname });
});

module.exports = router;
