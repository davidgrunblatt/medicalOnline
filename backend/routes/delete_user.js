
const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); 
const bcrypt = require('bcrypt'); 

router.post('/', async (req,res) => {
    try {
        // find account from JWT Decode Payload username
        const findAccount = await User
        .findOne({
            username: req.body.username
        }); 

        // if account isn't found return 400. 
        if (!findAccount){
            return res.status(400).send('Unable to find account and delete.'); 
        }
        
        // if account is found. Verify password before deleting. 
        const verifyPassword = await bcrypt.compare(req.body.password, findAccount.password); 
        
        // if password is verified, delete account. 
        if (verifyPassword){
            const deleted = await User.findOneAndDelete({
                username: req.body.username
            });
        }

        res.send(`Successfuly deleted ${findAccount.username}'s account!`); 
    }
    catch (ex){
        res.send(`Unable to delete ${findAccount.username}'s account!`); 
    }

});

module.exports = router; 