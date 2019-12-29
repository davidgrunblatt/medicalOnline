
const bodyP = require('body-parser'); 
// IMPORT ROUTES
const create_patient = require('../routes/create_patient'); 
const login_patient = require('../routes/login_patient'); 
const update_patient = require('../routes/update_patient'); 
const file_upload = require('../routes/file_upload'); 
const get_patient = require('../routes/get_patient'); 
const nodemailer = require('../routes/nodemailer'); 
const delete_patient = require('../routes/delete_patient'); 
const twilio = require('../routes/twilio'); 

module.exports = function(app){
    app.use(bodyP.json());
    app.use(bodyP.urlencoded()); 
    app.use('/api/create_patient', create_patient); 
    app.use('/api/login_patient', login_patient); 
    app.use('/api/get_patient', get_patient); 
    app.use('/api/update_patient', update_patient); 
    app.use('/api/delete_patient', delete_patient); 
    app.use('/api/file_upload', file_upload); 
    app.use('/api/nodemailer', nodemailer);
    app.use('/api/twilio', twilio); 
}