
const bodyP = require('body-parser'); 
// IMPORT ROUTES
const create_patient = require('../routes/create_patient'); 
const login_patient = require('../routes/login_patient'); 
const update_patient = require('../routes/update_patient'); 
const get_patient = require('../routes/get_patient'); 
const delete_patient = require('../routes/delete_patient'); 
const note_patient = require('../routes/note_patient');  

// UTITLITY ROUTES 
const nodemailer = require('../routes/utilities/nodemailer'); 
const twilio = require('../routes/utilities/twilio'); 
const file_upload = require('../routes/utilities/file_upload'); 
// APPOINTMENTS 
const calendar = require('../routes/appointments/month_generator'); 
const make_appointment = require('../routes/appointments/make_appointment'); 
const get_available_appointments = require('../routes/appointments/get_available_times'); 
const get_appointments = require('../routes/appointments/get_appointments'); 

// DR ROUTES
const create_doctor = require('../routes/drSide/create_doctor'); 
const login_doctor = require('../routes/drSide/login_doctor'); 
const dr_get_patient = require('../routes/drSide/dr_get_patient'); 
const get_all_patients = require('../routes/drSide/get_all_patients'); 
const note_doctor = require('../routes/drSide/note_doctor'); 
const delete_note_patient = require('../routes/drSide/delete_note_patient');


module.exports = function(app){
    app.use(bodyP.json());
    app.use(bodyP.urlencoded()); 
    app.use('/api/create_patient', create_patient); 
    app.use('/api/login_patient', login_patient); 
    app.use('/api/create_doctor', create_doctor); 
    app.use('/api/login_doctor', login_doctor); 
    app.use('/api/get_patient', get_patient); 
    app.use('/api/dr_get_patient', dr_get_patient); 
    app.use('/api/update_patient', update_patient); 
    app.use('/api/delete_patient', delete_patient); 
    app.use('/api/file_upload', file_upload); 
    app.use('/api/nodemailer', nodemailer);
    app.use('/api/twilio', twilio); 
    app.use('/api/get_all_patients', get_all_patients); 
    app.use('/api/note_patient', note_patient); 
    app.use('/api/note_doctor', note_doctor); 
    app.use('/api/delete_note_patient', delete_note_patient); 
    app.use('/api/calendar', calendar); 
    app.use('/api/get_appointments', get_appointments); 
    app.use('/api/make_appointment', make_appointment); 
    app.use('/api/get_available_appointments', get_available_appointments); 
}