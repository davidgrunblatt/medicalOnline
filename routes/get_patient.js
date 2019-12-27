
const express =require('express');
const router = express.Router();
const User = require('../models/Patients');

router.get('/', async (req, res) => {
    const account = await User
    .findById({ _id: req.query._id });

    res.send(account); 
})

module.exports = router; 