
const express = require('express');
const router = express.Router();
const Doctor = require('../../models/Doctors');
const auth = require('../../middleware/auth'); 

router.post('/', auth, async (req, res) => {
    if(req.body.action === 'save'){
        try {
            // FIND DR AND PUSH NOTE INTO NOTES ARRAY 
            const doctor = await Doctor
            .findByIdAndUpdate(req.body.user_id, {
                $push: { notes: {id: req.body.id} }
            });
            
            const save = await doctor.save();
            res.send(doctor); 
        }
        catch(ex) {
            res.send('Unable to add a note Dr.').status(400); 
        }
    } else if(req.body.action === 'delete') {
        try{
            const doctor = await Doctor
            .findByIdAndUpdate(req.body.user_id, {
                $pull: { notes: {id: req.body.id} }
            });

            const save = await doctor.save();
            res.send(save); 
        }
        catch(ex){
            res.send('Unable to remove note from Dr\'s account').status(400); 
        }
        res.send('yasss queen'); 
    }
});

module.exports = router; 

