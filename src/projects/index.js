"use strict";

const createProject = require("./create-project");
const path = require("path");
const templatePath = path.join(__dirname, "/../../templates/");

const create = db => {
  if (typeof db === "boolean") {
    createProject.createProject(path.join(templatePath, "project-mysql"));
  } else {
    createProject.createProject(path.join(templatePath, `project-${db}`));
  }
};

module.exports = {
  create
};
