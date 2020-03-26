
const express = require('express');
const router = express.Router();
const Patient = require('../../models/Patients');

router.get('/', async (req, res) => {
    try {
        const find = await Patient
        .find({
            username: req.query.username
        })
        .select({
            username: 1,
            fullname: 1,
            email: 1,
            phone: 1, 
            notes: 1
        }); 

        res.send(find); 
    }
    catch(ex){
        res.status(400).send('Unable to retrieve the user Dr.'); 
    }
});

module.exports = router; 