
const express = require('express');
const router = express.Router();
const Month = require('../../models/Months'); 
const confirmation_email = require('./confirmation_email'); 

router.post('/', async (req, res) => {
    try {
        const month = await Month
        .findOne({
            year: req.body.selectedYear, 
            monthID: req.body.selectedMonth
        })
        .catch(ex => console.log('unable to retrieve monthly info', ex));

        const dummy_appointment = {
            year: req.body.selectedYear, 
            monthID: req.body.selectedMonth,
            date: req.body.selectedDate,
            time: req.body.selectedTime,
            username: req.body.patient,
            email: req.body.email,
            notes: req.body.notes
        }

        confirmation_email(dummy_appointment); 

        await month.updateOne({
            $push: { appointments: dummy_appointment } 
        })
        await month.save();

        res.send(month); 
    }
    catch(ex){
        res.status(400).send('Unable to retrieve the monthly appointments', ex);
    }
});

module.exports = router; 