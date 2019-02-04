const sinon = require('sinon');
const expect = require('chai').expect;
const fs = require('fs');
const program = require('commander');
const createProject = require('../src/projects/create-project');
const logger = require('../src/utils/logger');

describe('Create Projects', function() {
  it('should invoke program help when error is thrown', function() {
    const fsStub = sinon.stub(fs, 'readdirSync').throws();
    const programStub = sinon.stub(program, 'help');
    const loggerStub = sinon.stub(logger, 'log');

    createProject.createProject('directory');

    expect(fsStub.calledOnce).to.be.true;
    expect(programStub.calledOnce).to.be.true;
    expect(loggerStub.calledOnceWithExactly('Invalid database provider')).to.be.true;
  });
});
