const winston = require('winston');
const {combine, timestamp, json} = winston.format;


const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json(),
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [

        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
    ],
});

// muestra por consola si no estamos en produccion 
logger.add(new winston.transports.Console({
    format:winston.format.simple(),
}));

// factori function 
module.exports = function buildLogger(service) {
    return {
        log: (message) => {
            logger.log('info',{ message, service});
        },  
        error:(message) => {
            logger.error('error', {
                message, 
                service,
                at: new Date().toISOString()
            })
        }
    };
};