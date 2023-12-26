"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUuidv4 = void 0;
const uuid_1 = require("uuid");
const getUuidv4 = () => {
    return (0, uuid_1.v4)();
};
exports.getUuidv4 = getUuidv4;
module.exports = {
    getUuidv4: exports.getUuidv4,
};
