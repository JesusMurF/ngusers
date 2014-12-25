var mongoose = require('mongoose');

var EmployeesSchema = new mongoose.Schema({
    first: String,
    last: String,
    image: {type: String, default: 'images/default.jpg'},
    street: String,
    city: String,
    state: String,
    country: String,
    postal_code: Number,
    abilities: Array,
    data: {
        worked_hours: Number,
        worked_hpd: Number,
        salary: Number
    }

});

module.exports = mongoose.model('Employees', EmployeesSchema);