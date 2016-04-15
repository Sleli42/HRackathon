module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	app.get('/form', function(req, res) {
		res.render('form.ejs');
	});

	app.get('/give', function(req, res) {
		res.render('give.ejs');
	});

	app.get('/slide', function(req, res) {
		res.render('slide.ejs');
	});
}