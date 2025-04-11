const logger = require("../logger")("commands:start");

module.exports = function start(config) {
    logger.highlight("    Starting the app    ");
    logger.debug("Recieved configuration to start -", config);
};
