const create_user = require('../routes/create_user');
const delete_user = require('../routes/delete_user');
const update_user = require('../routes/update_user');
const login_user = require('../routes/login_user');

module.exports = function(app){
    app.use( "/api/create_user", create_user); 
    app.use( "/api/delete_user", delete_user); 
    app.use( "/api/update_user", update_user);
    app.use( "/api/login_user", login_user);
}

