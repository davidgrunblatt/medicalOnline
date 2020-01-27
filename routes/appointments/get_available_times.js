
// on click of a specific day, retrieve the available appointments for that day.

const express = require('express');
const router = express.Router();
const Months = require('../../models/Months'); 

router.get('/', async (req, res) => {
    try {
        const month = await Months
        .findOne({
            year: req.query.selectedYear, 
            monthID: req.query.selectedMonth
        })
        .catch(ex => console.log('Unable to retrieve monthly data', ex)); 

        // var containing all times
        const times = [ 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6 ]; // default times 
        const appointments = month.appointments; // array of monthly appointments
        const selectedDate = req.query.selectedDate; // users selected date 

        // return available for that day, populate state and map out in JSX. !!! 
        const appointments_on_selectedDate = []; 
        const not_available_times = []; 

        // push appointments to ^^ appointments_on_selectedDate
        // push the times of those appointments to not_available_times
        for (let i = 0; i < appointments.length; i++){
            if (appointments[i].date == selectedDate){
            appointments_on_selectedDate.push(appointments[i]); 
            not_available_times.push(appointments[i].time); 
            }
        }
        // console.log("appointments", appointments_on_selectedDate); 
        // console.log('times not available.', not_available_times); 

        /// times - filter out the times in not_available_times
        let available = times.filter((e) => {
            // return all the ones that do not match times 
            return not_available_times.indexOf(e) === -1;
        });
        // console.log('available', available); 

        res.send(available); 
    }
    catch(ex){
        res.status(400).send('Unable to retrieve available times', ex); 
    }
});

module.exports = router; 