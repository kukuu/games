const assert = require('chai').assert;
const sayHell0 = require('../app').sayHello;
const addNumgers = require('../app').addNumbers;

describe('App', () => {
    it('sayHello should return hello', () => {
        let result = sayHell0();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', () => {
        let result = sayHell0();
        assert.typeOf(result, "string");
    });

    it('addNumber should be above 5', () => {
        let result = addNumgers(5,5);
        assert.isAbove(result, 5);
    });

    it('sayHello should return a number type', () => {
        let result = addNumgers(5,5);
        assert.typeOf(result, 'number');
    });

});