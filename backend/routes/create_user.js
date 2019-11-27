
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 
// USER CONSTRUCTOR
const User = require('../models/userModel');

router.post('/', async (req,res) => {
    try {
        // Search for username and password
        const checkForUserName = await User
        .findOne({
            username: req.body.username
        });
        const checkForEmail = await User
        .findOne({
            email: req.body.email
        });

        // if username or password exist, 400 error
        if (checkForUserName){
            return res.status(400).send('Username already exists.');
        }
        if (checkForEmail){
            return res.status(400).send('Email is already in use.');
        }

        // create a new user based off User model
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            fullName: req.body.fullName,
            isAdmin: false
        });
        
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt); 
        // assigning hashed password to new user 
        newUser.password = hash; 

        // save new user 
        const save  = await newUser.save(); 

        // generate JWT 
        const token = newUser.generateAuthToken(); 

        res.header('x-auth-token', token).header('access-control-expose-header', 'x-auth-token').send(save); 
    }
    catch (ex){ 
        res.send(ex.errors);
    }

});

module.exports = router; 
