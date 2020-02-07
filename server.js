
// EXPRESS SETUP 
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('./startup/mongoose'); // MONGOOSE CONNECTION 
const helmet = require('helmet'); 
const compression = require('compression'); 

// IF JWT PRIVATE KEY IS NOT INITIALIZED THROW ERROR 
if(!process.env.jwtPrivateKey) process.exit(1); 

// STARTUP
require('./startup/routes')(app); // ROUTES 

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./client/build')); 
    // SECURE RESPONSE HEADERS
    app.use(helmet()); 
    // MINIFY JS FILES
    app.use(compression()); 
}

// CONNECT TO PORT
app.listen(port, () => console.log(`Server is listening on port ${port}`)); 

