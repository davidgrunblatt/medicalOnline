
const random = () => {
    return Math.floor(Math.random() * 10); 
}
module.exports = function(){
    let key = '';
    let array = [];

    for (let i = 0; i <= 3; i++){
        array.push(random());
    }
    key = array.join(''); 
    return key; 
}