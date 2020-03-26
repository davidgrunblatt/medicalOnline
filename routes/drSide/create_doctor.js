
const express = require('express');
const router = express.Router();
const Doctor = require('../../models/Doctors'); 
const bcrypt = require('bcrypt'); 

router.post('/', async (req, res) => {
    // SEARCH IF DR USERNAME AND EMAIL ARE ALREADY IN USE. 
    const find_doctor = await Doctor
    .findOne({
        username: req.body.username
    });

    const find_email = await Doctor
    .findOne({
        email: req.body.email
    }); 

    // RETURN IF USERNAME OR EMAIL.
    if (find_doctor){
        return res.status(400).send('Username already exists... Login to your account');
    }
    if (find_email){
        return res.status(400).send('Email is already in use... Login to your account');
    }

    // CREATE NEW INSTANCE OF DOCTOR
    try {
        const doctor = new Doctor({
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password, 
            isAdmin: true
        });

        // SALT AND HASH NEW DR. PASSWORD 
        const salt = await bcrypt.genSalt(10); 
        doctor.password = await bcrypt.hash(req.body.password, salt); 

        const token = doctor.generateAuthToken();
        const save = await doctor.save(); 

        // SEND TOKEN IN HEADER
        res.header('x-auth-token', token).header('access-control-expose-headers', 'x-auth-token')
        .send(`Dr. ${doctor.username}'s account has been created!`); 
    }
    catch(ex){
        console.log('Unable to create Dr. account. ', ex); 
        res.status(400).send('Unable to create account.'); 
    }

});

module.exports = router; 