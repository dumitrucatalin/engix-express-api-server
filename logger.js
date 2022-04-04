const winston = require('winston');

const loggerOptions = {};

loggerOptions.format = winston.format.combine(winston.format.timestamp(), winston.format.json());

loggerOptions.transports = [];
const errorWarnInfoTransport = new winston.transports.Console({ level: 'info' });
loggerOptions.transports.push(errorWarnInfoTransport);

const verboseTransport = new winston.transports.File({
  filename: 'verbose.log',
  level: 'verbose',
});

if (process.env.ENABLE_LOG_VERBOSITY) {
  loggerOptions.transports.push(verboseTransport);
}

loggerOptions.exceptionHandlers = [];
loggerOptions.exceptionHandlers.push(new winston.transports.Console());

loggerOptions.exitOnError = false;

const logger = winston.createLogger(loggerOptions);

function logError(message) {
  logger.error(message);
}

function logWarn(message) {
  logger.warn(message);
}

function logInfo(message) {
  logger.info(message);
}

function logVerbose(message) {
  logger.log('verbose', message);
}

module.exports = {
  verbose: logVerbose,
  info: logInfo,
  warn: logWarn,
  error: logError,
};
