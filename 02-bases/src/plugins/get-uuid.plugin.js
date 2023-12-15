const { v4: uuidv4 } = require('uuid');

const getUuidv4 = () => {
    return uuidv4();
};

module.exports = {
    getUuidv4,
};