var express = require('express');
var path = require('path');
var app = module.exports = express();

var morgan = require('morgan');
var swig = require('swig');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.render('index', {message: 'hola mundo'});
});

var port = 3000;
app.listen(port, function (err) {
    if (err) {
        console.log('Error del servidor ' + err);
    } else {
        console.log('servidor corriendo en el puerto ' + port);
    };
});