
const express = require('express');
const router = express.Router();
const Month = require('../../models/Months'); 

router.post('/', async (req, res) => {
    const new_month = new Month({
        year: req.body.year,
        month: req.body.month,
        monthID: req.body.monthID, 
        numberOfDays: req.body.numberOfDays
    }); 

    await new_month.save(); 
    res.send(new_month);
}); 

module.exports = router; 