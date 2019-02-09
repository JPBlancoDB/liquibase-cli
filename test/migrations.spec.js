const sinon = require('sinon');
const expect = require('chai').expect;
const path = require('path');
const migrations = require('../src/migrations');
const copy = require('../src/utils/copy');

describe('Migrations', function() {
  afterEach(function() {
    sinon.restore();
  });

  it('should invoke copy.file with migration-default file', function() {
    const fakePath = 'directory/migration-default.yml';
    const pathStub = sinon.stub(path, 'join').returns(fakePath);
    const copyStub = sinon.stub(copy, 'file');
    const now = Date.now();
    sinon.useFakeTimers(now);

    migrations.create('CustomName');

    expect(pathStub.calledOnceWithExactly(sinon.match.string, 'migration-default.yml')).to.be.true;
    expect(copyStub.calledOnceWithExactly(fakePath, `${now}_custom_name`, 'migrations')).to.be.true;
  });
});
