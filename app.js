var express  = require('express'); //get express library
var app = express();
var routes = require('./routes');

app.set('view engine','ejs');

app.locals.pagetitle = "Awesome Website";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req,res){
	res.send('Bad Route');
});

var server = app.listen(3000,function(){
	console.log('listening on port 3000');
});