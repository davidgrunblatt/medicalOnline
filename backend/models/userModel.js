const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); 
const config = require('config'); 

const schema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true,
        minlength:5,
        maxLength:50
    },
    fullName: {
        type:String,
        required:true,
        minlength:5,
        maxLength:120
    },
    email: {
        type:String,
        unique:true,
        required:true,
        minlength:5,
        maxLength:120
    }, 
    phone: {
        type:String
    },
    password: {
        type: String,
        required: true,
        maxLength: 120
    },
    isAdmin: Boolean,
    documents: Array,
    appointments: Array
});

schema.methods.generateAuthToken = function(){
    const token = jwt.sign({
        _id:this._id,
        username:this.username,
        isAdmin:this.isAdmin
    }, config.get('jwtPrivateKey'));

    return token; 
}

const User = mongoose.model("User", schema); 

module.exports = User; 

