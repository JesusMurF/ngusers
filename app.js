var express = require('express');
var path = require('path');
var morgan = require('morgan');
var swig = require('swig');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.engine('html', swig.renderFile);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Error handling: 
    Deveplopment.
*/
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
};

/* Error handling: 
    Production.
*/
if (app.get('env') === 'production') {
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    res.render('index');
});

mongoose.connect('mongodb://localhost:27017/employees');
var employeeRoutes = require('./routes/employee.js')(app);


var port = 3000;
app.listen(port, function (err) {
    if (err) {
        console.log('Error del servidor ' + err);
    } else {
        console.log('Servidor corriendo en el puerto ' + port);
    }
});
