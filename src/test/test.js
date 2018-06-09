var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

const calculator = require('../app/calculator');

it('verifico la operacion suma', () => {
    let result = calculator.sum(2, 3);
    assert.equal(result, 5);
});

it('verifico la operacion multiplicar', () => {
    let result = calculator.mul(2, 3);
    expect(result).to.equal(6)
});

it('verifico la operacion restar', () => {
    let result = calculator.sub(2, 3);
    result.should.equal(-1);
});
