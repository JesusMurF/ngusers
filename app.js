var express = require('express');
var path = require('path');
var morgan = require('morgan');
var swig = require('swig');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = module.exports = express();

app.engine('html', swig.renderFile);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    debugger;
    res.render('index', {message: 'hola mundo'});
});

mongoose.connect('mongodb://localhost:27017/employees');
var Employee = require('./models/employees.js');

app.post('/api/add',function(req, res) {
        var employee = new Employee({
        first: req.body.first, 
        last: req.body.last,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        postal_code: req.body.postal_code,
        abilities: req.body.abilities,
        data: {
            worked_hours: req.body.worked_hours,
            worked_hpd: req.body.worked_hpd,
            salary: req.body.salary
        }
        });

        employee.save(function(err, employee) {
            if (err)
                res.send(err);
            console.log(employee);
            res.json({employee: employee, message: 'Employee created!' });
        });
    });

app.get('/api/all', function(req, res) {
    Employee.find(function(err, employees) {
        if (err) {
            res.send(err);
        };
        res.json(employees);
    })
})

var port = 3000;
app.listen(port, function (err) {
    if (err) {
        console.log('Error del servidor ' + err);
    } else {
        console.log('Servidor corriendo en el puerto ' + port);
    }
});
