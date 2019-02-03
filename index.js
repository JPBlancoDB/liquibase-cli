#!/usr/bin/env node

const program = require("commander");
const pkg = require("./package.json");
const project = require("./src/projects");

program
  .version(pkg.version, "-v, --version")
  .option("-p, --project [db]", "Create new project")
  .parse(process.argv);

if (program.project) {
  project.create(program.project);
  process.exit(0);
}

if (program.args.length === 0) program.help();
