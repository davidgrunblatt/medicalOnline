
const express = require('express'); 
const router = express.Router();
const Patient = require('../models/Patients');

router.post('/', async (req, res) => {
    try{
        // FIND PATIENT BY USERNAME
        const patient = await Patient
        .findOne({ username: req.body.username });

        // UPDATE PATIENTS NOTES ARRAY
        await patient.updateOne({
            $pull: { notes: { id: req.body.id } }
        }); 

        // SAVE PATIENT
        const save = await patient.save();
        res.send(save); 
    }
    catch(ex){
        res.status(400).send('Unable to pull note from client'); 
    }
});

module.exports = router; 