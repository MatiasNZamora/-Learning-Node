// const { getAge, getUuidv4 } = require('../plugins');

const buildMakePerson = ( {getUuidv4, getAge} ) => {
    return ({name, birthdate}) => {
    
        return {
            id: getUuidv4(),
            name:name,
            birthdate: birthdate,
            age: getAge(birthdate)
        };
    };
};


// const john = buildPerson(obj);
// console.log(john);

module.exports = {
    buildMakePerson,
};