module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	app.get('/form', function(req, res) {
		res.render('form.ejs');
	});

	app.get('/test', function(req, res) {
		res.render('test.ejs');
	});
}