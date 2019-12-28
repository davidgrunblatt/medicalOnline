
const express = require('express');
const router = express.Router();
const Patient = require('../models/Patients'); 
const auth = require('../middleware/auth'); 

router.post('/', auth, async(req, res) => {
   try {
        // FIND ACCOUNT WITH USER ID FOUND IN REQ.PATIENT. req.patient comes from auth middleware .verify()
        const account = await Patient
        .findById({ _id: req.body._id})
        .select({
            username: 1,
            email: 1,
            phone: 1,
            fullname: 1
        });

        // UPDATE ACCOUNT DETAILS 
        await account.update({
            username: req.body.username ? req.body.username : account.username,
            fullname: req.body.fullname ? req.body.fullname : account.fullname,
            email: req.body.email ? req.body.email : account.email,
            phone: req.body.phone ? req.body.phone : account.phone,
        });

        // SAVE ACCOUNT CHANGES 
        const save = await account.save(); 
        res.send(save); 
    }
    catch(ex) {
        console.log(ex); 
        res.status(400).send('Unable to Update Account...'); 
    }
});

module.exports = router; 