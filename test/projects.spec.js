const sinon = require('sinon');
const expect = require('chai').expect;
const projects = require('../src/projects');
const createProject = require('../src/projects/create-project');

describe('Projects', function() {
  let createProjectStub;

  beforeEach(function() {
    createProjectStub = sinon.stub(createProject, 'createProject');
  });

  afterEach(function() {
    createProjectStub.restore();
  });

  it('should invoke createProject with mysql as default when no arg is given', function() {
    projects.create(true);

    expect(createProjectStub.calledOnce).to.be.true;
    expect(createProjectStub.calledWithMatch('project-mysql')).to.be.true;
  });

  it('should invoke createProject with the given arg as project name', function() {
    const provider = 'random-name';
    projects.create(provider);

    expect(createProjectStub.calledOnce).to.be.true;
    expect(createProjectStub.calledWithMatch(`project-${provider}`)).to.be.true;
  });
});
