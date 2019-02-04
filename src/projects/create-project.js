'use strict';

const program = require('commander');
const fs = require('fs');
const copy = require('./copy');
const logger = require('../utils/logger');
const currentDir = process.cwd();

const copyFiles = (directory, subDirectory) => {
  const filesToCopy = fs.readdirSync(directory);

  filesToCopy.forEach(item => {
    const file = `${directory}/${item}`;
    const itemStat = fs.statSync(file);

    if (itemStat.isFile()) {
      copy.file(file, item, subDirectory);
    } else if (itemStat.isDirectory()) {
      fs.mkdirSync(`${currentDir}/${item}`);
      copyFiles(`${directory}/${item}`, item);
    }
  });
};

const createProject = directory => {
  try {
    copyFiles(directory);
  } catch {
    logger.log('Invalid database provider');
    program.help();
  }
};

module.exports = {
  createProject
};
