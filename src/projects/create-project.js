'use strict';

const program = require('commander');
const fs = require('fs');
const copy = require('./copy');
const logger = require('../utils/logger');

const createProject = directory => {
  try {
    const filesToCopy = fs.readdirSync(directory);

    filesToCopy.forEach(item => {
      const file = `${directory}/${item}`;
      const itemStat = fs.statSync(file);

      if (itemStat.isFile()) {
        copy.file(file, item);
      } else if (itemStat.isDirectory()) {
        copy.directory(file);
      }
    });
  } catch (e) {
    logger.log('Invalid database provider');
    program.help();
  }
};

module.exports = {
  createProject
};
