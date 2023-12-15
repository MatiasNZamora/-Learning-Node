const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if(!birthdate) return new Error('birtgdate is required');
    return getAgePlugin(birthdate);
};

module.exports = {
    getAge,
};

