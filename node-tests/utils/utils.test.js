const assert = require('assert');
const expect = require('expect');

const utils = require('./utils');


it('Should add two values', () => {
    var result = utils.add(2, 2);
    expect(result)
        .toBe(4)
        .toBeA('number');
    assert.equal(4, result);
});


it('Should asyncAdd two values', (done) => {
    utils.asyncAdd(4, 8, (result) => {
        expect(result).toBe(12);
        done();
    });
});

it('Should square value', () => {
    var result = utils.square(3);
    expect(result).toBe(9);
});

it('Should asyncSquare value', (done) => {
    utils.asyncSquare(9, (result) => {
        expect(result).toBeA('number').toBe(81);
        done();
    });
});

it('should expect values', () => {
    expect({
        name: 'Carlos'
    }).toInclude({
        name: 'Carlos'
    });
});

it('Should split names', () => {
    expect(utils.SetName({}, 'Carlos Pedro'))
        .toInclude({
            firstName: 'Carlos'
        })
        .toInclude({
            lastName: 'Pedro'
        });

});