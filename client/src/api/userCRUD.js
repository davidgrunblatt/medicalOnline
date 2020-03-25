
import axios from 'axios';

// app.js login handler
export const loginAPI = (username, password) => new Promise(async(resolve, reject) => {
    await axios.get('/api/login_patient', {
        params: {
            username,
            password
        }
    })
    .then(response => resolve(response))
    .catch(err => {
        console.error('Login API error ', err);
        reject(err); 
    }); 
})

// app.js register handler
export const registerAPI = (username, email, password) => new Promise(async(resolve, reject) => {
    await axios.post('/api/create_patient', {
        username,
        password,
        email
    })
    .then(response => resolve(response))
    .catch(err => {
        console.error('Register API error', err);
        reject(err); 
    })
});

// app.js update handler
export const updateAPI = (id, fullname, email, phone, jwt) => new Promise(async(resolve, reject) => {
    await axios.post('/api/update_patient', {
        _id: id, // ID FROM JWT PAYLOAD
        fullname,
        email,
        phone
    }, 
    {
        headers: {
            'x-auth-token': jwt
        }
    })
    .then(response => resolve(response))
    .catch(err => {
        console.error('Update patient API error', err);
        reject(err); 
    })
})

// Global state GET on componentDidMount()
export const populateGlobalState = (id) => new Promise(async(resolve, reject) => {
    await axios.post('/api/get_patient', {
        params: {
            _id: id
        }
    })
    .then(response => resolve(response))
    .catch(err => {
        console.error('populateGlobalStateAPI error', err);
        reject(err); 
    })
});
 
