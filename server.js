
// EXPRESS SETUP 
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('./startup/mongoose');

// IF JWT PRIVATE KEY IS NOT INITIALIZED THROW ERROR 
if(!process.env.jwtPrivateKey) throw new Error((err) => console.log('JWT Key is NOT Defined!')); 

// STARTUP
require('./startup/routes')(app); // ROUTES 

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./client/build')); 
}

// CONNECT TO PORT
app.listen(port, () => console.log(`Server is listening on port ${port}`)); 

