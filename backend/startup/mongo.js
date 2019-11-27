const mongoose = require('mongoose');
const config = require('config');

const connectToMongo = mongoose.connect(config.get('db'))
.then(() => {
    console.log(`MongoDB: Successfully connected.`);
})
.catch((ex) => {
    console.log(`MongoDB: unable to connect to MongoDb!`);
});

module.exports = connectToMongo; 