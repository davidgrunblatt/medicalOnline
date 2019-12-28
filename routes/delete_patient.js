
const express = require('express');
const router = express.Router();
const User = require('../models/Patients');
const auth = require('../middleware/auth'); 

router.post('/', auth, async (req, res) => {
    try {
        const account = await User
        .findByIdAndDelete({ _id: req.body._id });

        res.send('Successfully delete your account'); 
    }
    catch (ex){
        console.log('Unable to delete your account...', ex); 
    }
});

module.exports = router; 