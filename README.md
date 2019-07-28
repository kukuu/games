# Games and Algorithms

Using Open Source programming to build games.

## Vanilla JavaScript

###  Rock, Paper & Scissors - Beat the Computer!

This is  a web application GAME - Rock, Paper & Scissors, using vanilla JavaScript with some of its best practices. Including es6 and some new  JavaScript API objects.

This game has been engineered to be played against the Computer. 

You can read more on the game from here - https://en.wikipedia.org/wiki/Rock–paper–scissors. 

Note, the semantics  in descriptive names of the caching variables for the DOM elements.

The application's JavaScript document is versioned, and documented to reflect the iterations which went on in building the application (app.js[main], ap-v1.js, ap-v2.js, ap-v3.js,  ap-v4.js,  ap-v5.js). This is done for tutorial, coaching and learning purposes, and has substantial comments. The final output (app.js)is optimised. This MUST be understood.

##### Unit Test
1. Mocha Framework
2. Chai Assertion Library
4. Test suites:
- "draw".
- "user" wins.
- "comp" (Computer) wins.
5. package.json

```
{
  "name": "rock-paper-scissors",
  "version": "1.0.0",
  "description": "Mocha Chai NodeJS ",
  "main": "appsRPS.js",
  "dependencies": {
    "gulp": "^4.0.2"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^6.1.4"
  },
  "scripts": {
    "test": "mocha || true"
  },
  "author": "Alexander Adu-Sarkodie",
  "license": "ISC"
}

```
6. To execute test script: npm run test


##### Extended test

1. https://github.com/kukuu/unittests/tree/master/mocha-chai/test 

2. Requires Gulp, Mocha and Chai(npm install --save-dev).


### FizzBuzz

https://github.com/kukuu/siliconlabs/blob/master/fizzBuzz/fizzbuzz.md 

### JavaScript Algorithms 

https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038 


### lowest common multiple

https://www.gcflcm.com/lcm-of-24-and-36

### Code Review tips

1. SOLID: Does the code follow SOLID principles?

2. DRY: Are re-usble properties, routines being cached?

3. Formatting: Where are the spaces and line breaks? Are they using tabs or spaces? How are the curly braces laid out?

4. Style: Are the variables/parameters declared as final? Are method variables defined close to the code where they’re used or at the start of the method?

5. Naming: Do the field/constant/variable/param/class names conform to standards? Are the names overly short?

6. Test coverage: Is there a test for this code?

7. Race conditions: Any global polution? Leakages? Managing callbacks and side effects.

8. Design patterns: What design patterns are used in the new code? Any anti-patterns (in loops etc)

9. Lines of code: Are functions too long?

10. Using modern syntaxes (ES6): Arrow functions, default parameters, block scoping, template strings, spread operators, generator functions, destructuring etc

11. Look out for null values. Where exceptions are needed.
