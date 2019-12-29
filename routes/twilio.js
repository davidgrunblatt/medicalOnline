
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
const express = require('express');
const router = express.Router(); 

// Endpoint to generate access token
router.get('/', (req, res) => {
   var identity = "dpg1919"; // change to req.query.name later

   // Create an access token which we will sign and return to the client,
   // containing the grant we just created
   var token = new AccessToken(
       process.env.TWILIO_ACCOUNT_SID,
       process.env.TWILIO_API_KEY,
       process.env.TWILIO_API_SECRET
   );

   // Assign the generated identity to the token
   token.identity = identity;

   const grant = new VideoGrant();
   // Grant token access to the Video API features
   token.addGrant(grant);

   // Serialize the token to a JWT string and include it in a JSON response
   res.send({
       identity: identity,
       token: token.toJwt()
   });
});

module.exports = router; 