// const { getAge, getUuidv4 } = require('../plugins');

interface BuildMakerPersonOptions {
    getUuidv4: () => string;
    getAge: ( birthdate:string ) => number;
};

interface PersonOptions {
    name: string;
    birthdate: string;
};

export const buildMakePerson = ( {getUuidv4, getAge}:BuildMakerPersonOptions ) => {
    return ( {name, birthdate}:PersonOptions ) => {
    
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