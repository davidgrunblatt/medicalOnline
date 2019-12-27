
const mongoose = require('mongoose');

mongoose.connect(process.env.mongo, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then( () => console.log('Successfully connected to MongoDB...') )
.catch( (ex) => console.log('Unable to connect to MongoDB...', ex) );

module.exports = mongoose; 

