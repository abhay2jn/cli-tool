const logger = require("../logger")("commands:build");

module.exports = function build(config) {
    logger.highlight("   Building the app    ")
    logger.debug("Recieved configuration to build -", config)
}