#!/usr/bin/env node
'use strict';

const program = require('commander');
const pkg = require('./package.json');
const project = require('./src/projects');
const migrations = require('./src/migrations');

program
  .version(pkg.version, '-v, --version')
  .option('-p, --project [db]', 'Create new project')
  .option('-m, --migration <name>', 'Create new migration file');

program.command('*').action(function() {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});

program.parse(process.argv);

if (program.project) {
  project.create(program.project);
  process.exit(0);
}

if (program.migration) {
  migrations.create(program.migration);
  process.exit(0);
}

if (program.args.length === 0) program.help();
