'use strict';

const log = message => {
  console.log(message);
};

const error = exception => {
  console.error(exception);
};

module.exports = {
  log,
  error
};
