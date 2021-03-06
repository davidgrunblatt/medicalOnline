
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); 

router.post('/', async (req, res) => {

    const new_user = {
        name: req.body.name,
        subject: req.body.subject,
        message: req.body.message
    }

    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.password // generated ethereal password
        }
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
        from: new_user.name, // sender address
        to: process.env.email, // list of receivers
        subject: new_user.subject, // Subject line
        text: '', // plain text body
        html: `<p>name: ${new_user.name} <br/>
                  message: ${new_user.message}
              </p>` // html body
        });

        res.send('Successfully sent email...');
    }
        
    catch(ex){
        console.log('Unable to send email via Node Mailer', ex); 
    }
});

module.exports = router;
