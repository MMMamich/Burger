//Dependencies=============================

var express = require('express');
var md = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(md('_method'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controller/burgers_controller.js');
app.use('/',routes)

var PORT = 3000;

app.listen(PORT);
//==========================================
