module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	app.get('/give', function(req, res) {
		res.render('give.ejs');
	});

	app.get('/form2', function(req, res) {
		res.render('form2.ejs');
	});

	app.get('/ask', function(req, res) {
		res.render('ask.ejs');
	});

	app.get('/box', function(req, res) {
		res.render('box.ejs');
	});

	app.get('/request', function(req, res) {
		res.render('request.ejs');
	});

	app.get('/slide', function(req, res) {
		res.render('slide.ejs');
	});

	app.get('/test', function(req, res) {
		res.render('test.ejs');
	});
}