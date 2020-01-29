
const nodemailer = require('nodemailer');

module.exports = async (appointment)=> {
    appointment.subject = 'Clinica Furelos appointment confirmation'; 
    appointment.message = `This email is a confirmation notice of the 
    appointment you have booked with Dr. Furelos on ${appointment.date}/${appointment.monthID}/${appointment.year}
    at ${appointment.time}. We look forward to seeing you.`; 

    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "dpg1919@gmail.com", // generated ethereal user
            pass: "claptoncocaine131" // generated ethereal password
        }
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
        from: 'clinicafurelos@gmail.com', // sender address
        to: appointment.email, // list of receivers
        subject: appointment.subject, // Subject line
        text: '', // plain text body
        html: `<p>Dear ${appointment.username} <br/>
                  message: ${appointment.message}
              </p>` // html body
        });

        console.log(`Successfully sent email to ${appointment.email}`);
    }
        
    catch(ex){
        console.log('Unable to send email via Node Mailer', ex); 
    }
}