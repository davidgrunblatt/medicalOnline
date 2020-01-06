
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); 

// PATIENT SCHEMA 
const patient_schema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 4, 
        maxlength: 15,
        required: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 254
    },
    password: {
        type: String,
        required: true,
        minlength: 4, 
        maxlength: 128
    },
    phone: {
        type: String,
        minlength: 7,
        maxlength: 15,
    },
    fullname: {
        type: String,
        maxlength: 128
    },
    documents: {
        type: Array
    },
    isAdmin: Boolean,
    chatKey: {
        type: String,
        required: true,
        maxlength: 4
    }
});

// GENERATE AUTH TOKEN 
patient_schema.methods.generateAuthToken = function(){
    const token = jwt.sign({
        user_id: this._id,
        username: this.username,
        isAdmin: this.isAdmin
    }, process.env.jwtPrivateKey); 
    
    return token; 
}

// CREATE MODEL 
const Patient = mongoose.model("Patient", patient_schema); 

module.exports = Patient; 

