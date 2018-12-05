
/* eslint-env mocha */
const expect = require('expect');
const {randn} = require('../src/index');
require('should');

describe('randn - random generator', () => {

  it('[1] generates single array with one random number', () => {
    const arr = randn(1,1);
    arr//?
    //arr.should.be.type('array');
    arr.length.should.equal(1);
    arr[0].should.be.type('number');
  });
});