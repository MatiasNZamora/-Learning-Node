"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
;
const users = [
    {
        id: 1,
        name: 'Jone Doe'
    },
    {
        id: 2,
        name: 'Jone Doe'
    }
];
const getUserById = (id, callback) => {
    const user = users.find((user) => {
        return user.id === id;
    });
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
