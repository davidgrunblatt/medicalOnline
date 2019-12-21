
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Patient = require('../models/Patients'); 

router.get('/', async (req, res) => {
    try {
        // FIND USERNAME
        const find_patient = await Patient
        .findOne({
            username: req.body.username
        });
        // STATUS 400 IF !USERNAME 
        if(!find_patient) return res.status(400).send('Username Not Found...');
        
        // COMPARE PASSWORD
        const validate_password = await bcrypt.compare(req.body.password, find_patient.password); 
        // STATUS 400 IF !PASSWORD
        if(!validate_password) return res.status(400).send('Password is Incorrect...');

        // GENERATE AUTH TOKEN 
        const token = await find_patient.generateAuthToken();

        // SEND PATIENT 
        res.header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send(find_patient); 
    }

    catch(ex){
        console.log('ERROR LOGGING IN PATIENT: ', ex); 
        res.status(400).send('Unable To Login Patient...');
    }
});

module.exports = router; 