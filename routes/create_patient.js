
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const Patient = require('../models/Patients'); 

router.post('/', async (req, res) => {
    try {
        // CHECK IF USERNAME || EMAIL EXISTS 
        const find_patient_username = await Patient.findOne({
            username: req.body.username
        });
        const find_patient_email = await Patient.findOne({
            email: req.body.email
        });

        if(find_patient_username){
            return res.status(400).send('Username Already Exists...');
        }
        if(find_patient_username){
            return res.status(400).send('Email Already in Use...'); 
        }

        // CREATE NEW PATIENT 
        const new_patient = new Patient({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            fullname: req.body.fullname,
            isAdmin: false
        });

        // HASH PASSWORD 
        const salt = await bcrypt.genSalt(10);
        new_patient.password = await bcrypt.hash(req.body.password, salt);

        // GENERATE AUTH TOKEN
        const token = new_patient.generateAuthToken(); 
        // SAVE PASSWORD 
        const save = await new_patient.save(); 

        // SENDING HEADERS AND SAVED PATIENT 
        res.header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send(save); 
    }

    catch(ex){
        console.log('UNABLE TO CREATE PATIENT: ', ex); 
        res.send(ex); 
    }
});

module.exports = router; 