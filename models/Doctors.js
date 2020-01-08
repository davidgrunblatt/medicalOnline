
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); 

const doctor_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    notes: Array,
    isAdmin: Boolean
});

doctor_schema.methods.generateAuthToken = function(){
    const token = jwt.sign({
        username: this.username,
        fullname: this.fullname,
        isAdmin: this.isAdmin
    }, process.env.jwtPrivateKey); 

    return token; 
}

const Doctor = mongoose.model('Doctor', doctor_schema);

module.exports = Doctor; 