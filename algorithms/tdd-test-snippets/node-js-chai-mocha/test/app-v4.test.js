const assert = require('chai').assert;
const app = require('../app');

//Results
sayHelloResults = app.sayHello();
addNumbersResults = app.addNumbers(5,5);


describe('App', () => {
    it('sayHello should return hello', () => {
        assert.equal(sayHelloResults, 'hello');
    });

    it('sayHello should return type string', () => {
        assert.typeOf(sayHelloResults, "string");
    });

    it('addNumber should be above 5', () => {
        assert.isAbove(addNumbersResults, 5);
    });

    it('sayHello should return a number type', () => {
        assert.typeOf(addNumbersResults, 'number');
    });

});