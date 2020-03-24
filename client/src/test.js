
import axios from 'axios';

    const promise = (id) => new Promise(async(resolve, reject) => {
    // TESTING TESTING TESTING TESTING
    await axios.get('/api/get_patient', {
        params: {
            _id: id
        }
    })
    .then(data => resolve(data.data))
    .catch(ex => reject('unable to retrieve data')); 
})

export default promise; 