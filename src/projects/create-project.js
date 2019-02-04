"use strict";

const program = require("commander");
const fs = require("fs");
const copyDirectory = require("./copy-directory");
const copyFile = require("./copy-file");

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
  } catch (e) {
    console.log("Invalid project ", e);
    program.help();
  }
};

module.exports = createProject;
