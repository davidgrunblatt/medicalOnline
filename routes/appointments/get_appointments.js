
const express = require('express');
const router = express.Router();
const Months = require('../../models/Months');

// will be for doctor side. they can log in and make a request to see all the appointments for a given month

router.get('/', async (req, res) => {
    try {
        const month = await Months
        .findOne({
            year: req.query.selectedYear, 
            monthID: req.query.selectedMonth
        })
        .catch(ex => console.log('Unable to retrieve monthly data', ex)); 

        res.send(month); 
    }
    catch(ex){
        res.status(400).send('Unable to retrieve appointments'); 
    }
});

module.exports = router; 