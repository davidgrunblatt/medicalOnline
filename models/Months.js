
const mongoose = require('mongoose');

// schema, model, export

const month_schema = new mongoose.Schema({
    year: String,
    month: String,
    monthID: Number,
    numberOfDays: Number,
    appointments: Array
});

const Month = mongoose.model('Month', month_schema);

module.exports = Month; 