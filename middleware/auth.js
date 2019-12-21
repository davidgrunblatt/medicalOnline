
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    // GRAB TOKEN FROM HEADERS
    const token = req.header('x-auth-token');
    // IF !TOKEN RETURN 401 ERROR 
    if (!token) return res.status(401).send('UNAUTHORIZED ACTION');

    // JWT PRIVATE KEY FROM ENVIRONMENT VARIABLE TO USE AS KEY IN .VERIFY() 
    const jwtPrivateKey = process.env.jwtPrivateKey; 

    try {
        // DECODE JWT
        const verify = jwt.verify(token, jwtPrivateKey); 
        // Create req.patient and set it's value to the decoded jwt (verify)
        req.patient = verify; 
        // call next piece of the chain 
        next();
    }
    catch (ex) {
        res.status(400).send('No Token Found'); 
    }

}