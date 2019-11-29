
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    // check for token
    const token = req.header('x-auth-token');
    if (!token) res.status(401).send('Unauthorized Action');

    try {
        // verify if jwt is authentic, then next()
        const verify = jwt.verify(token, config.get('jwtPrivateKey')); 
        req.user = verify;
        next();
    }
    catch (ex){
        console.log('ERRRRRROORRRRR', ex); 
        throw new Error('Unable to get authorization'); 
    }
}