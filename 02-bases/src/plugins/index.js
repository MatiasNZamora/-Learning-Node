// archivos de barril 

const { getUuidv4 } = require('../plugins/get-uuid.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { http } = require('../plugins/http-client.plugin')
const buildLogger  = require('../plugins/logger.plugin')

module.exports = {
    getUuidv4,
    getAge,
    http,
    buildLogger,
}