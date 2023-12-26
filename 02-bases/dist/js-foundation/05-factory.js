"use strict";
// const { getAge, getUuidv4 } = require('../plugins');
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
;
;
const buildMakePerson = ({ getUuidv4, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUuidv4(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const john = buildPerson(obj);
// console.log(john);
