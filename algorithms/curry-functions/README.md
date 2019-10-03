# Curry and compositional programming

Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

Curry functions are neat when used to carry containers of reusable code. Basically you take a function with multiple arguments and you know that one of those arguments will have specific value but the other is undecided. Therefor by using curry, as a fancy partial application, you can create a new function which will allow you to deal only with the undecided arguments without repeating your code.


In functional programming JavaScript has first class functions because it supports functions as arguments and return values.
