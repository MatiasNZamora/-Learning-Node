import { v4 as uuidv4 } from 'uuid';

export const getUuidv4 = () => {
    return uuidv4();
};

module.exports = {
    getUuidv4,
};