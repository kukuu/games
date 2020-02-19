const assert = require('chai').assert;
//const sayHell0 = require('../app').sayHello;
//const addNumgers = require('../app').addNumbers;
const app = require('../app');

describe('App', () => {
    it('sayHello should return hello', () => {
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', () => {
        let result = app.sayHello();
        assert.typeOf(result, "string");
    });

    it('addNumber should be above 5', () => {
        let result = app.addNumgers(5,5);
        assert.isAbove(result, 5);
    });

    it('sayHello should return a number type', () => {
        let result = app.addNumgers(5,5);
        assert.typeOf(result, 'number');
    });

});