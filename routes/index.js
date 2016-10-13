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
	var fields = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		hs_context: req.body.hs_context
	};
	request.post('https://forms.hubspot.com/uploads/form/v2/203693/293f3623-cc14-415e-87b3-70978616cdca').form(fields);
    res.render('helloworld', { title: 'Hello, '+ req.body.firstname });
});

module.exports = router;
