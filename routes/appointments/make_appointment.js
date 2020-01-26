
const express = require('express');
const router = express.Router();
const Month = require('../../models/Months'); 

router.post('/', async (req, res) => {
    const month = await Month
    .findOne({
        year: req.body.selectedYear, 
        monthID: req.body.selectedMonth
    })
    .catch(ex => console.log('unable to retrieve monthly info', ex));

    const dummy_appointment = {
        date: req.body.selectedDate,
        time: req.body.selectedTime,
        patient: req.body.patient,
        notes: req.body.notes
    }

    await month.updateOne({
        $push: { appointments: dummy_appointment } 
    })
    await month.save();

    res.send(month); 
});

module.exports = router; 