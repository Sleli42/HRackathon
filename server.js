var	express = require('express');
var	morgan = require('morgan');
var	port = process.env.PORT || 2121;
var app = express();

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
	res.send('index.html');
})

app.listen(port, function() {
	console.log('Server running on port: ' + port);
})