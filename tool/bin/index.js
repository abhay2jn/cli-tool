#!/usr/bin/env node

const logger = require("../src/logger")("bin");
const arg = require("arg");
const chalk = require("chalk");
const start = require("../src/commands/start");
const build = require("../src/commands/build");
const getConfig = require("../src/config/config-mgr");

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  logger.debug("Recieved args", args);

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  } else if (args["--build"]) {
    const config = getConfig();
    build(config);
  }
} catch (e) {
  logger.warning(e.message);
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.grey("tool [CMD]")}
        ${chalk.blue("--start\tStarts the app")}
        ${chalk.blueBright("--build\tBuilds the app")}`);
}
