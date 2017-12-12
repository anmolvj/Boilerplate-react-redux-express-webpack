var express = require('express');

var app = express();

let port = 3000;

app.use('/static' , express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.get('/',(req,res) => {
	res.render("index");
});


app.listen(port, () => {
	console.log("listening to this joint on port 3000");
});