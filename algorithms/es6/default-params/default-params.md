
# Using default params

Functions are one of the key building blocks of JavaScript, and before now, checking for undefined parameters was just a fact of life. 

With the introduction of default parameters, though, at least some of the boilerplate can be peeled away, making functions easier to write, read and maintain, and I, for one, am incredibly grateful, and excited for future improvements as well.


## Traditional Function Parameters

One of the things functions allow us to do is define a set of statements that performs a task or calculates a value the same way, every time, AND supply a list of parameters that can be passed in to be operated on.
Regardless of what values are passed in as parameters, the function will attempt to run the same tasks every time it is called.

### Anatomy of a Function Declaration with Parameters


i. Simple add function

```

function simpleAdd(a, b){
  return a + b;
}
simpleAdd(2, 3); // prints: 5

```

ii. Function Declaration with Too Many & Too Few Parameters (Not scalable!)

```
function add(a, b){
  return a + b;
}


console.log(add(1, 2, 3, 4)); // prints: 3
console.log(add(1)); // prints: NaN

```

iii. Checking a Function for `undefined` Parameters (old school!! A pain)

```

function addImproved(a, b) {
if(a === undefined){
  a = 3;
}
if(b === undefined){
  b = 7;
}
  return a + b;
}


console.log(addImproved(6,9)); // prints: 15 
console.log(addImproved()); // prints: 10

```


## Default Function Parameters

They allow named parameters in a function to be initialized with default values if no value or undefined is passed in.

### Two Old Ways of Preventing Undefined Parameters

```
function oldSum (x, y, z) {
  if (y === undefined) {
    y = 7;
  }
  z = (typeof z !== 'undefined') ? z : 42;
  return `oldSum(${x}) === ${x + y + z}`;
};


console.log(oldSum(1));  // prints: oldSum(1) === 50
console.log(oldSum(2, 5, 8)); // prints: oldSum(2) === 15
console.log(oldSum()); // prints: oldSum(undefined) === NaN

```

### ES6 Way to Prevent Undefined Errors with Default Parameters

```
function newSum (x, y = 7, z = 42) {
  return `newSum(${x}) === ${x + y + z}`;
};


console.log(newSum(1)); // prints: newSum(1) === 50
console.log(newSum(3, 6, 9)); // prints: newSum(3) === 18
console.log(newSum(16, undefined)); // prints: newSum(16) === 65

```

### ES6 Default Parameters in Arrow Functions

```
const thisWayWorksToo = (x = 7, y = 8) => {
  return x + y;
}

console.log(thisWayWorksToo(3, 4)); // prints: 7
console.log(thisWayWorksToo()); // prints: 15

```

### Passing Undefined vs Other Falsy Values 


One thing that could trip you up: passing other falsy values like null or '’ to a function with default parameters will not result in the default value being substituted instead.

As you can see below when luckyNumber() is called with no value or a value of undefined it falls back to its default param of 11. When it’s called, however, with an empty string or a null value, it takes that value instead.

```
function luckyNumber(num = 11) { 
  console.log(typeof num);
};

luckyNumber(); // prints: 'number' (num is set to 11)
luckyNumber(undefined); // prints: 'number' (num is set to 11 too)

// test with other falsy values:
luckyNumber(''); // prints: 'string' (num is set to '')
luckyNumber(null); // prints: 'object' (num is set to null)

```


### Evaluation at Call Time

The second thing to know is: default values are evaluated at call time, so a new object is created each time the function is called — not, contrary to what you might think, adding to an already existing object or array.

```
function append(value, array = []) {
  array.push(value);
  return array;
}
console.log(append(1)); // prints: [1]

```


Each time the append() function runs, it creates a brand new array with the value supplied as its contents. The first time the function is called and executed it runs, makes an array and is done, and its execution context is destroyed once it’s done running.


What this means is that the function is now completely done with (and unaware of) the original array it created. Which is why, when append() is invoked a second time, with a second value, it creates a second, entirely new array, instead of adding to the first one it created.
console.log(append(2)); // prints: [2], not [1, 2]


### Earlier Params are Available to Later Default Params

Parameters declared earlier (to the left) in a parameter string are then available to be used by later default parameters.

```

function welcome(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message];
}
console.log(welcome('Sean', 'Hi'));  // ["Sean", "Hi", "Hi Sean"]
console.log(welcome('Sean', 'Hi', 'Happy Birthday!'));  // ["Sean", "Hi", "Happy Birthday!"]

```


### Parameters Without Defaults after Default Parameters - Left to Right evaluation rule

Parameters are always set left-to-right, and they overwrite default parameters even if there are later parameters without defaults. This example below probably illustrates it better.


```

function f(x = 1, y) {
  return [x, y];
}
console.log(f()); // prints: [1, undefined]
console.log(f(4)); // prints: [4, undefined]

```