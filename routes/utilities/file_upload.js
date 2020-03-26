
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); 
const fileUpload = require('express-fileupload');
const path = require('path'); 
const Patient = require('../../models/Patients'); 
const nodemailer = require('nodemailer'); 
const jwt = require('jsonwebtoken'); 

// fileupload package middleware to parse file
router.use(fileUpload());

router.post('/', auth, async(req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded...');
  }

  // DECODED JWT PAYLOAD 
  const decoded = await jwt.verify(req.header('x-auth-token'), process.env.jwtPrivateKey);

  // FIND ACCOUNT WITH USER ID FOUND IN REQ.PATIENT. req.patient comes from auth middleware .verify()
  const account = Patient
  .findById({ _id: decoded.user_id }); 

  // THE FILE FROM REQ
  let file = req.files.file;

  // SAVE AS NAME
  let save_as = "file_" + Math.floor(Math.random() * 100); 
  // PATH TO IMAGE 
  let location = './images/' + decoded.user_id + "_" + save_as + path.extname(file.name); 

  // OBJECT WITH FILE INFO
  const file_object = {
    user_id: account.user_id,
    username: account.username, 
    name: save_as, 
    src: location
  }

   try {
     // ACCOUNT .UPDATE $PUSH DOCUMENT TO ARRAY 
    await account.updateOne({
          $push: { documents: file_object }
      });

      // SAVE FILE IN LOCATION 
      file.mv(location, function(err) {
        if (err)
          return res.status(500).send('unable');
      });
   }

   catch(ex) {
     console.log(ex); 
   }

   try {
     // create reusable transporter object using the default SMTP transport
      let transporter = await nodemailer.createTransport({
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
        from: file_object.username, // sender address
        to: "dpg1919@gmail.com", // list of receivers
        subject: save_as, // Subject line
        text: '', // plain text body,
        attachments: {
          filename: req.body.save_as,
          path: location
        }, 
        html: `<p>name: ${file_object.username} <br/>
                  message: ${save_as}
              </p>` // html body
        });
   }
   catch(ex){
     console.log('Unable to send file with Nodemailer', ex); 
   }

  res.send('Successfully saved file!');
});


module.exports = router; 