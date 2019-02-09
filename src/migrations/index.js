'use strict';

const path = require('path');
const templatePath = path.join(__dirname, '/../../templates/');
const copy = require('../utils/copy');

const create = name => {
  const file = path.join(templatePath, 'migration-default.yml');
  const snakeCase = name
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
  const fileName = `${Date.now()}_${snakeCase}`;

  copy.file(file, fileName, 'migrations');
};

module.exports = {
  create
};
