import {expect} from 'chai';
import changeCoins from '../src/changeCoins.js';

describe('src/changeCoins.js', () => {

     it('should add 100p, 50p and 50p to make £2', () => {
        let result = changeCoins(100,50,50);

        let resultFInal = "£" + (result/100);
        expect(resultFInal).to.equal("£2");
        console.log(resultFInal)
    });

     it('should add 100p, 50p, 50p and 3p to make £2.53', () => {
        let result = changeCoins(100, 50, 50, 50, 3);

        let resultFInal = "£" + (result/100);

        expect(resultFInal).to.equal("£2.53");
        console.log(resultFInal)
    });


     it('should  throw an exception when you add a 100p, 50p, 50p and 3p to make $253', () => {
        let result = changeCoins(100, 50, 50, 50, 3);

        let resultFInal = "£" + (result);

        expect(resultFInal).to.equal("$253");
        console.log(resultFInal)
    });

})
