'use strict';

const fs = require('fs');
const path = require('path');

const file = (file, fileName) => {
  const contents = fs.readFileSync(file, 'utf8');

  fs.writeFileSync(path.join(process.cwd(), fileName), contents, 'utf8');
};

const directory = dir => {
  console.log(dir);
};

module.exports = {
  file,
  directory
};
