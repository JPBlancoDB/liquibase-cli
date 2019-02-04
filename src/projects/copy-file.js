"use strict";

const fs = require("fs");
const path = require("path");

function getNewPath(directory, fileName) {
  if (directory) return `${process.cwd()}/${directory}/${fileName}`;

  return `${process.cwd()}/${fileName}`;
}

const copyFile = (file, fileName, directory) => {
  const contents = fs.readFileSync(file, "utf8");

  fs.writeFileSync(path.join(process.cwd(), fileName), contents, "utf8");
};

module.exports = copyFile;
