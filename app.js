var express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    swig = require('swig'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    router = express.Router();

app.engine('html', swig.renderFile);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/employees');

/* Error handling: 
    Deveplopment.
*/
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
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
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};


// Templating and static files
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Routes
var employeesController = require('./controllers/employees');
var router = express.Router();

app.get('/', function(req, res) {
    res.render('index');
});

var router = express.Router();

router.route('/employees')
    .get(employeesController.getEmployees)
    .post(employeesController.postEmployee);

router.route('/employees/:employee_id')
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

app.use('/api', router);

// Server connection
var port = 3000;
app.listen(port, function(err) {
    if (err) {
        console.log('Error del servidor ' + err);
    } else {
        console.log('Servidor corriendo en el puerto ' + port);
    }
});