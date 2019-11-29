
const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); 
const auth = require('../startup/auth'); 

router.post('/', auth, async (req,res) => {
    // Search for account
    const account = await User
    .findOne({
        username: req.body.username
    });

    // if account isn't found 400. 
    if (!account) {
        res.status(400).send('Unable to update account.');
    }

    try {
        // update account with req.body
        await account.updateOne({
            username: req.body.username ? req.body.username : account.username,
            email: req.body.email ? req.body.email : account.email,
            fullName: req.body.fullName ? req.body.fullName : account.fullName
        });

        // update documents and appointments
        if (req.body.documents){
            await account.update({
                $push: { documents: req.body.documents }
            }); 
        }
        if (req.body.appointments){
            await account.update({
                $push: { appointments: req.body.appointments }
            }); 
        }
    
        // save to mongoDB 
        const save = await account.save();
    
        res.send('Account has been updated'); 
    }

    catch (ex) {
        res.send('unable to update your account');
        console.log('ERROR', ex); 
    }
});

module.exports = router; 