"use strict";

const fs = require("fs");
const path = require("path");
const copyDirectory = require("./copy-directory");
const copyFile = require("./copy-file");
const templatePath = path.join(__dirname, "/../../templates/");

const createDefault = () => {
  const defaultDirectory = path.join(templatePath, "project-mysql");

  try {
    const filesToCopy = fs.readdirSync(defaultDirectory);

    filesToCopy.forEach(item => {
      const file = `${defaultDirectory}/${item}`;
      const itemStat = fs.statSync(file);

      if (itemStat.isFile()) {
        copyFile(file);
      } else if (itemStat.isDirectory()) {
        copyDirectory(file);
      }
    });
  } catch (e) {
    console.log("Cannot write file ", e);
  }
};

const createProject = db => {
  console.log(db);
};

const create = db => {
  if (typeof db === "boolean") {
    createDefault();
  } else {
    createProject(db);
  }
};

module.exports = {
  create
};
