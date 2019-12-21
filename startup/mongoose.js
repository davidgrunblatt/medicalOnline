
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dpg1919:Claptoncocaine13@fureloscluster-sbeuj.mongodb.net/test?retryWrites=true&w=majority", 
{ useNewUrlParser: true })
.then( () => console.log('Successfully connected to MongoDB...') )
.catch( (ex) => console.log('Unable to connect to MongoDB...', ex) );

module.exports = mongoose; 

