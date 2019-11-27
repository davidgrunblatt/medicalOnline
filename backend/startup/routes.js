const create_user = require('../routes/create_user');
const delete_user = require('../routes/delete_user');

module.exports = function(app){
    app.use( "/api/create_user", create_user); 
    app.use( "/api/delete_user", delete_user); 
}

