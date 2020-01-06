
const Joi = require('joi');

const login_schema = (input) => {
    const schema = {
        username: Joi.string().min(4).max(15).required(),
        password: Joi.string().min(4).max(128).required()
    }
    
    return Joi.validate(input, schema, (err, value) => {
        if(err){
            return err;  
        }
    });
}

export {
    login_schema
} 