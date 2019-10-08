//Using the spread operator to *future proof*  and scale matrices of the operation. 
//Invoking multiple operands at different points in time, complexity and space.

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

// Unpack arguments into array, and append to reduce.
//Takes a number of arguments and returns operation, and a static point in the calculaton to reference. Zero (0), here
  		console.log(sum(1,2)); // returns 3
  		console.log(sum(1,2,3)); // returns 6
