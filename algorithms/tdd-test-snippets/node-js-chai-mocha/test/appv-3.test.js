const assert = require('chai').assert;
const app = require('../app');

//Results
sayHelloResults = app.sayHello();
addNumbersResults = app.addNumbers(5,5);


describe('App', () => {
    it('sayHello should return hello', () => {
        //let result = app.sayHell0();
        assert.equal(sayHelloResults, 'hello');
    });

    it('sayHello should return type string', () => {
        //let result = app.sayHell0();
        assert.typeOf(sayHelloResults, "string");
    });

    it('addNumber should be above 5', () => {
        //let result = app.addNumgers(5,5);
        assert.isAbove(addNumbersResults, 5);
    });

    it('sayHello should return a number type', () => {
        //let result = app.addNumgers(5,5);
        assert.typeOf(addNumbersResults, 'number');
    });

});