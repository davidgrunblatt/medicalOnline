
const express = require('express');
const router = express.Router(); 
const Patients = require('../models/Patients'); 
const isAdmin = require('../middleware/isAdmin'); 

router.get('/', isAdmin, async (req, res) => {
    try {
        // FIND ALL PATIENTS IN COLLECTION 
        const patients = await Patients
        .find({})
        .select({
            username: 1,
            fullname: 1,
            email: 1,
            phone: 1, 
            notes: 1
        }); 

        // SEND PATIENTS
        res.send(patients);
    }
    catch(ex) {
        console.log(ex); 
        res.send('Something went wrong retrieving users.'); 
    }
});

module.exports = router;