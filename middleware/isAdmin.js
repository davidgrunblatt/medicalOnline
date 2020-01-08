
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    // GET TOKEN FROM HEADERS
    const token = req.header('x-auth-token');
    // IF !TOKEN STATUS 401 UNAUTHORIZED
    if (!token) return res.status(401).send('Unauthorized action...');

    // JWT PRIVATE KEY
    const jwtPrivateKey = process.env.jwtPrivateKey;

    try {
        // DECODE TOKEN 
        const verify = jwt.verify(token, jwtPrivateKey);
        // IF TOKEN IS ADMIN NEXT()
        if(verify.isAdmin === true){
            next();
        } else {
            res.status(401).send('Unauthorized action...'); 
        }
    }
    catch(ex) {
        console.log('Unable to verify Admin', ex); 
        res.status(401).send('Unable to verify if Admin');
    }

}

