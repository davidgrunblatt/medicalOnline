const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 3001; 

// START
const connectToMongo = require('./startup/mongo'); 
const User = require('./models/userModel'); 
const config = require('config'); 

// ROUTES / MIDDLEWARE 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
require('./startup/routes')(app); 

// PRIVATE KEY CHECK 
if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }

// CONNECT TO PORT 
app.listen(port, () => {
    console.log(`Successfully connected to port: ${port}`);
});

