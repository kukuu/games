import {expect} from 'chai';
import sum from '../src/sum.js';

describe('src/sum.js', () => {
    it('should add 1 + 1 to make two', () => {
        let result = sum(1,1);

        expect(result).to.equal(2);

        console.log(result)
    })

     it('should add 100p, 50p and 50p to make 200p', () => {
        let result = sum(100,50,50);

        let resultFInal = "£" + (result/100);
        expect(resultFInal).to.equal("£2");
        console.log(resultFInal)
    });

     it('should add 100p, 50p, 50p and 3p to make 253p', () => {
        let result = sum(100, 50, 50, 50, 3);

        let resultFInal = "£" + (result/100);

        expect(resultFInal).to.equal("£2.53");
        console.log(resultFInal)
    });


     it('should  throw an exception when you add a 100p, 50p, 50p and 3p to make 253pc', () => {
        let result = sum(100, 50, 50, 50, 3);

        let resultFInal = "£" + (result);

        expect(resultFInal).to.equal("$253");
        console.log(resultFInal)
    });

    it('should add 1, 2 and 3 to make six', () => {
        let result = sum(1,2,3);

        expect(result).to.equal(6);
        console.log(result)
    })
})
