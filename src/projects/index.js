"use strict";

const fs = require("fs");

const createDefault = () => {
  const fileContent = "default";

  try {
    fs.writeFileSync("file", fileContent);
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
