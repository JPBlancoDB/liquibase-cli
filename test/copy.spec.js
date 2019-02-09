const fs = require('fs');
const path = require('path');
const sinon = require('sinon');
const expect = require('chai').expect;
const copy = require('../src/utils/copy');

describe('Copy', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should copy a file with a subdirectory', function() {
    const file = 'file';
    const fileName = 'fileName';
    const subDirectory = 'directory';
    const pathStub = sinon.stub(path, 'join');
    const fsReadContentStub = sinon.stub(fs, 'readFileSync').returns('content');
    const fsWriteFileStub = sinon.stub(fs, 'writeFileSync');

    copy.file(file, fileName, subDirectory);

    expect(fsReadContentStub.calledOnceWithExactly(file, 'utf8')).to.be.true;
    expect(fsWriteFileStub.calledOnce).to.be.true;
    expect(pathStub.calledOnceWithExactly(sinon.match.string, subDirectory, fileName)).to.be.true;
  });

  it('should copy a file without a subdirectory', function() {
    const file = 'file';
    const fileName = 'fileName';
    const pathStub = sinon.stub(path, 'join');
    const fsReadContentStub = sinon.stub(fs, 'readFileSync').returns('content');
    const fsWriteFileStub = sinon.stub(fs, 'writeFileSync');

    copy.file(file, fileName);

    expect(fsReadContentStub.calledOnceWithExactly(file, 'utf8')).to.be.true;
    expect(fsWriteFileStub.calledOnce).to.be.true;
    expect(pathStub.calledOnceWithExactly(sinon.match.string, fileName)).to.be.true;
  });
});
