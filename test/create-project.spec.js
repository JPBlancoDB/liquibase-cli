const sinon = require('sinon');
const expect = require('chai').expect;
const fs = require('fs');
const program = require('commander');
const createProject = require('../src/projects/create-project');
const logger = require('../src/utils/logger');
const copy = require('../src/projects/copy');

describe('Create Projects', function() {
  it('should invoke program help when error is thrown', function() {
    const fsStub = sinon.stub(fs, 'readdirSync').throws();
    const programStub = sinon.stub(program, 'help');
    const loggerStub = sinon.stub(logger, 'log');

    createProject.createProject('directory');

    fsStub.restore();

    expect(fsStub.calledOnce).to.be.true;
    expect(programStub.calledOnce).to.be.true;
    expect(loggerStub.calledOnceWithExactly('Invalid database provider')).to.be.true;
  });

  it('should invoke copy.file when item is of type file', function() {
    const directory = 'directory';
    const file = 'file';
    const content = `${directory}/${file}`;
    sinon.stub(fs, 'readdirSync').returns([file]);
    const statSyncFake = {
      isFile: sinon.stub().returns(true)
    };
    const fsStatStub = sinon.stub(fs, 'statSync').returns(statSyncFake);
    const copyStub = sinon.stub(copy, 'file');

    createProject.createProject(directory);

    expect(statSyncFake.isFile.calledOnce).to.be.true;
    expect(fsStatStub.calledOnceWithExactly(content)).to.be.true;
    expect(copyStub.calledOnceWithExactly(content, file)).to.be.true;
  });
});
