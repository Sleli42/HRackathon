module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	app.get('/ask', function(req, res) {
		res.render('slideshow_feedback.ejs');
	});
}