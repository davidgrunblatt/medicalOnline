
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const Doctor = require('../../models/Doctors'); 

router.get('/', async (req, res) => {
    // FIND DR. ACCOUNT BASED ON USERNAME
    try {
        const doctor = await Doctor
        .findOne({
            username: req.query.username
        });

        // STATUS 400 IF !USERNAME 
        if(!doctor) return res.status(400).send('Username Not Found...');

        // COMPARE PASSWORD
        const password = await bcrypt.compare(req.query.password, doctor.password);
        // IF !PASSWORD STATUS 400
        if(!password) return res.status(400).send('Password is incorrect...'); 

        // GENERATE AUTH TOKEN 4 HEADER
        const token = doctor.generateAuthToken(); 

        // SEND DOCTOR DATA AND TOKEN IN HEADER 
        res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send(doctor); 
    }
    catch(ex){
        console.log('Unable to login Dr. ',  ex); 
        res.status(400).send('Unable to login Dr.');
    }
});

module.exports = router; 