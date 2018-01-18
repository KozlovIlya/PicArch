const port = 3003;
const express = require('express');
const pug = require('pug');
const app = express();

app.set('view engine', 'pug');
app.set('views', './public/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index.pug');
});
	
app.listen(port, function() {
	console.log('listening on port ' + port);
});