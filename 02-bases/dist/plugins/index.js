"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUuidv4 = exports.buildLogger = exports.http = exports.getAge = void 0;
// archivos de barril 
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
var get_uuid_plugin_1 = require("./get-uuid.plugin");
Object.defineProperty(exports, "getUuidv4", { enumerable: true, get: function () { return get_uuid_plugin_1.getUuidv4; } });
// const { getUuidv4 } = require('../plugins/get-uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { http } = require('../plugins/http-client.plugin')
// const buildLogger  = require('../plugins/logger.plugin')
// module.exports = {
//     getUuidv4,
//     getAge,
//     http,
//     buildLogger,
// }
