
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt'); 

router.post('/', async (req, res) => {

    // find account based off of username
    const username = await User
    .findOne({
        username: req.body.username
    });

    // if not found return 400 bad request
    if (!username) res.status(400).send('Unable to find user'); 

    // check whether the account password and the user password match
    const password = await bcrypt.compare(req.body.password, username.password); 
    // if not 400 bad request 
    if (!password) res.status(400).send('Password is incorrect'); 
    
    // generate a JWT 
    const token = await username.generateAuthToken(); 

    // send JWT in header 
    res.header('x-auth-token', token).header('access-control-expose-header', 'x-auth-token').send('Logged in'); 
});

module.exports = router; 