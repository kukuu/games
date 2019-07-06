//1. Rock, Paper, Scissors unit-test with Mocha Framework and Chai assertion library

//Test suits
//SMOKE TEST
// draw
//user wins
//comp wins

//user wins combination option= 
// r and s
// p and r
// s and p


//comp wins combination  options
// user loses to comp
//r and  p
//p and s
//s and r

//draw
//Options
// r and r
// p and p
// s and s

let rockPaperScissors = require('./app-sut.js');
let expect = require('chai').expect;

//SMOKE test
describe.only('rockPaperScissors', () => {

	describe('smoke tests', () => {
		it('should exist', () => {
			expect(rockPaperScissors).to.exist;
		});

		it('should be a function', () => {
			expect(rockPaperScissors).to.be.a('function')
		});
	})
//draw
	describe('draw conditions', () => {
		it('should return draw on "rr"' , () => {
			expect(rockPaperScissors('rr')).to.equal('draw');
		});

		it('should return draw on "pp"' , () => {
			expect(rockPaperScissors('pp')).to.equal('draw');
		});

		it('should return draw on "ss"', () => {
			expect(rockPaperScissors('ss')).to.equal('draw');
		});

	});

//User winning
	describe('player "user" winning', () => {
		it('shoud return "user" on  "rs"', () => {
			expect(rockPaperScissors('rs')).to.equal('user');
		});

		it('shoud return "user" on  "pr"', () => {
			expect(rockPaperScissors('pr')).to.equal('user');
		});

		it('shoud return "user" on  "sp"', () => {
			expect(rockPaperScissors('sp')).to.equal('user');
		});

	});

//computer winning

	describe('player "comp" winning', () => {
		it('shoud return "comp" on  "rp"', () => {
			expect(rockPaperScissors('rp')).to.equal('comp');
		});

		it('shoud return "comp" on  "ps"', () => {
			expect(rockPaperScissors('ps')).to.equal('comp');
		});

		it('shoud return "comp" on  "sr"', () => {
			expect(rockPaperScissors('sr')).to.equal('comp');
		});
	});

});

