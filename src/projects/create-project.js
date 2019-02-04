"use strict";

const program = require("commander");
const fs = require("fs");
const copyDirectory = require("./copy-directory");
const copyFile = require("./copy-file");
const logger = require("../utils/logger");

const createProject = directory => {
  try {
    const filesToCopy = fs.readdirSync(directory);

    filesToCopy.forEach(item => {
      const file = `${directory}/${item}`;
      const itemStat = fs.statSync(file);

      if (itemStat.isFile()) {
        copyFile(file, item);
      } else if (itemStat.isDirectory()) {
        copyDirectory(file);
      }
    });
  } catch {
    logger.log("Invalid database provider");
    program.help();
  }
};

module.exports = {
  createProject
};
