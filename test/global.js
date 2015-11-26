var chai = require('chai');
var sinon = require('sinon');

global.expect = chai.expect;

beforeEach(function () {
  this.sandbox = sinon.sandbox.create();
});

afterEach(function () {
  this.sandbox.restore();
});
