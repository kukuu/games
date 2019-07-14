# Games

Using Open Source programming to build games.

## Vanilla JavaScript

### Beat the Computer!

This is  a web application GAME - Rock, Paper & Scissors, using vanilla JavaScript with some of its best practices. Including es6 and some new  JavaScript API objects.

This game has been engineered to be played against the Computer. 

You can read more on the game from here - https://en.wikipedia.org/wiki/Rock–paper–scissors. 

Note, the semantics  in descriptive names of the caching variables for the DOM elements.

The application's JavaScript document is versioned, and documented to reflect the iterations which went on in building the application (app.js[main], ap-v1.js, ap-v2.js, ap-v3.js,  ap-v4.js,  ap-v5.js).

## Unit Test
1. Mocha Framework
2. Gulp Test Runner
3. Chai Assertion Library
4. Test suites:
-  SMOKE test
- "draw".
- "user" wins.
- "comp" (Computer) wins.

## Code Review tips

1. SOLID: Does the code follow SOLID principles?

2. DRY: Are re-usble properties, routines being cached?

3. Formatting: Where are the spaces and line breaks? Are they using tabs or spaces? How are the curly braces laid out?

4. Style: Are the variables/parameters declared as final? Are method variables defined close to the code where they’re used or at the start of the method?

5. Naming: Do the field/constant/variable/param/class names conform to standards? Are the names overly short?

6. Test coverage: Is there a test for this code?

7. Race conditions: Any global polution? Leakages?

8. Design patterns: What design patterns are used in the new code? Any anti-patterns (in loops etc)

9. Lines of code: Are functions too long?

10. Using modern syntaxes (ES6): Arrow functions, default parameters, block scoping, template strings, spread operators, generator functions, destructuring etc

Enjoy!
