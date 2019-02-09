[![Build Status](https://travis-ci.org/JPBlancoDB/liquibase-cli.svg?branch=master)](https://travis-ci.org/JPBlancoDB/liquibase-cli) [![Maintainability](https://api.codeclimate.com/v1/badges/ec4a86b2331037ba2d96/maintainability)](https://codeclimate.com/github/JPBlancoDB/liquibase-cli/maintainability) [![Coverage Status](https://coveralls.io/repos/github/JPBlancoDB/liquibase-cli/badge.svg?branch=master)](https://coveralls.io/github/JPBlancoDB/liquibase-cli?branch=master) [![Dependency Status](https://david-dm.org/jpblancodb/liquibase-cli.svg)](https://david-dm.org/jpblancodb/liquibase-cli) [![DevDependency Status](https://david-dm.org/jpblancodb/liquibase-cli/dev-status.svg)](https://david-dm.org/jpblancodb/liquibase-cli#info=devDependencies)

# Liquibase CLI

The purpose of this cli is using [Liquibase](http://www.liquibase.org/) from the console without any extra configuration.

## Installation

- Java is required.

Open your console of preference and run: `npm install -g liquibase-cli`

## Usage

For creating a new migrations project run:

`liquibase-cli -p` or `liquibase-cli --project` and it will create a new migration project for mysql as default.

## Supported databases

1. MySQL
