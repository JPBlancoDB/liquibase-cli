'use strict';

const fs = require('fs');
const path = require('path');

const getPath = (fileName, pathName) => {
  if (pathName) {
    return path.join(process.cwd(), pathName, fileName);
  }

  return path.join(process.cwd(), fileName);
};

const file = (file, fileName, pathName) => {
  const contents = fs.readFileSync(file, 'utf8');

  fs.writeFileSync(getPath(fileName, pathName), contents, 'utf8');
};

module.exports = {
  file
};
