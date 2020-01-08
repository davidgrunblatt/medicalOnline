
const express = require('express'); 
const router = express.Router();
const Patient = require('../models/Patients');
const keyGenerator = require('../middleware/keyGenerator'); 

router.post('/', async (req, res) => {
    try{
        // FIND PATIENT BY USERNAME
        const patient = await Patient
        .findOne({ username: req.body.username });

        // DUMMY NOTE TO PUSH TO NOTES ARRAY
        const note = {
            id: keyGenerator(), 
            subject: req.body.subject,
            content: req.body.content
        }

        // PUSH NOTE ^^ TO PATIENTS NOTES ARRAY
        await patient.updateOne({
            $push: { notes: note }
        })

        const save = await patient.save();
        res.send(save); 
    }
    catch(ex){
        res.status(400).send('Unable to push note to client'); 
    }
});

module.exports = router; 