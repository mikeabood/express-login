var express = require('express');
var path = require('path')
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var input = [ {}, {} ];

app.use(bodyParser.urlencoded({
	extended:true
}));



app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs');

app.get('/', function(req, res){
	res.render("home")
})


app.post('/login', function(req,res){
	console.log(req.body)
	res.render('home');
})






server.listen(3000, function(){
	console.log("port 3000 ready to pair")
})
