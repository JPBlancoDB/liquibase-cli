#!/usr/bin/env node
'use strict';

const program = require('commander');
const pkg = require('./package.json');
const project = require('./src/projects');

program
  .version(pkg.version, '-v, --version')
  .option('-p, --project [db]', 'Create new project')
  .option('-m, --migration <name>', 'Create new migration file')
  .parse(process.argv);

if (program.project) {
  project.create(program.project);
  process.exit(0);
}

if (program.migration) {
  console.log(program.migration);
  process.exit(0);
}

if (program.args.length === 0) program.help();
