const chalk = require("chalk");
const debug = require("debug");

module.exports = function createLogger(name) {
  return {
    log: (...args) => console.log(chalk.greenBright(...args)),
    warning: (...args) => console.log(chalk.redBright(...args)),
    highlight: (...args) => console.log(chalk.yellowBright(...args)),
    debug: debug(name)
  };
};