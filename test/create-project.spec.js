const sinon = require('sinon');
const expect = require('chai').expect;
const fs = require('fs');
const program = require('commander');
const createProject = require('../src/projects/create-project');
const logger = require('../src/utils/logger');
const copy = require('../src/projects/copy');

const statSync = value => {
  return {
    isFile: sinon.stub().returns(value),
    isDirectory: sinon.stub().returns(!value)
  };
};

describe('Create Projects', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should invoke program help when error is thrown', function() {
    const fsStub = sinon.stub(fs, 'readdirSync').throws();
    const programStub = sinon.stub(program, 'help');
    const loggerLogStub = sinon.stub(logger, 'log');
    const loggerErrorStub = sinon.stub(logger, 'error');

    createProject.createProject('directory');

    expect(fsStub.calledOnce).to.be.true;
    expect(programStub.calledOnce).to.be.true;
    expect(loggerLogStub.calledOnceWithExactly('Invalid database provider')).to.be.true;
    expect(loggerErrorStub.calledOnce).to.be.true;
  });

  it('should invoke copy.file when item is of type file', function() {
    const directory = 'directory';
    const file = 'file';
    const content = `${directory}/${file}`;
    const readdirSyncStub = sinon.stub(fs, 'readdirSync').returns([file]);
    const statSyncStub = statSync(true);
    const fsStatStub = sinon.stub(fs, 'statSync').returns(statSyncStub);
    const copyStub = sinon.stub(copy, 'file');

    createProject.createProject(directory);

    expect(readdirSyncStub.calledOnce).to.be.true;
    expect(statSyncStub.isFile.calledOnce).to.be.true;
    expect(statSyncStub.isDirectory.notCalled).to.be.true;
    expect(fsStatStub.calledOnceWithExactly(content)).to.be.true;
    expect(copyStub.calledOnceWith(content, file)).to.be.true;
  });

  it('should create directory when item is of type directory', function() {
    const directory = 'directory';
    const file = 'file';
    const readdirSyncStub = sinon.stub(fs, 'readdirSync').returns([file]);

    const fsStatStub = sinon.stub(fs, 'statSync');
    fsStatStub.onFirstCall().returns(statSync(false));
    fsStatStub.onSecondCall().returns(statSync(true));

    const fsMkDirStub = sinon.stub(fs, 'mkdirSync');
    const copyStub = sinon.stub(copy, 'file');

    createProject.createProject(directory);

    expect(readdirSyncStub.calledTwice).to.be.true;
    expect(fsStatStub.calledTwice).to.be.true;
    expect(copyStub.calledOnce).to.be.true;
    expect(fsMkDirStub.calledOnce).to.be.true;
  });
});
