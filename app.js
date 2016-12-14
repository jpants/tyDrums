var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/app/css'));
app.use(express.static(__dirname + '/app/fonts'));
app.use(express.static(__dirname + '/app/images'));
app.use(express.static(__dirname + '/build'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req,res){
  res.render('index', {});
});
app.get('/:theUrl', function(req,res){
  res.render('index', {theUrl: req.params.theUrl});
});

var port = 3000;
app.listen(port, function() {
  console.log('server listening on port ' + port);
});