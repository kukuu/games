
const sum = (a) => (b) => a +b;


//returns the number 3
sum(1)(2);


sum(2) // returns a function y = 2 + y. Note left 2 right. x here is 2. Y has no value