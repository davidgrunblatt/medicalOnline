
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 
const fileUpload = require('express-fileupload');
const path = require('path'); 
const Patient = require('../models/Patients'); 

// fileupload package middleware to parse file
router.use(fileUpload());

router.post('/', async(req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded...');
  }

    // DECODED JWT PAYLOAD 
    // const decoded = await req.patient; 
    const decoded = '5dfd9f8afc5bdf1bef11b78c'; // for testing purposes, replace with ^^ later. 

  // FIND ACCOUNT WITH USER ID FOUND IN REQ.PATIENT. req.patient comes from auth middleware .verify()
  const account = await Patient
  .findById({ _id: decoded }); 

  // THE FILE FROM REQ
  let file = req.files.file;

  // SAVE AS NAME
  let save_as = req.body.save_as; 
  // PATH TO IMAGE 
  let location = './images/' + decoded + "_" + save_as + path.extname(file.name); 

  // OBJECT WITH FILE INFO
  const file_object = {
    user_id: account.user_id,
    username: account.username, 
    name: save_as, 
    src: location
  }

  // ACCOUNT .UPDATE $PUSH DOCUMENT TO ARRAY 
  await account.update({
      $push: { documents: file_object }
  });

  // SAVE FILE IN LOCATION 
  file.mv(location, function(err) {
    if (err)
      return res.status(500).send('unable');

    // res.send(account);
  });
  res.send(file);
});


module.exports = router; 