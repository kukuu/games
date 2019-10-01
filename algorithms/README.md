# Types of Algorithms

To assist in the calculus of runtime complexities, we approximate the scalability of an algorithm by extrapolating its input sizes toward infinity (passing signatures/parameters) before counting the number of operations required.

At this worst-case runtime upper bound, we can drop coefficients and additive terms, retaining only factors that dominate the function. The most optimum algorithm scales in constant time and space. This means it does not care at all about the growth of its inputs.

```
Constant: O(1)

Logarithmic: O(log n)

Linear: O(n)

Linearithmic: O(n log n)

Quadratic: O(n²)

Expontential: O(2^n)

Factorial: O(n!)

```
 
## Design structure of Algorithms

### Arrays
Arguably the most important inherent standard object used in algorithms. In JavaScript, no other object has more utility methods than arrays. 

Array elements are inserted beginning at the 0th index. This means the last element is at array.length — 1. Arrays are the most optimal for indexing (pushing), but can be terrible at inserting, deleting (not popping), and searching. 

Array methods worth remembering are: 

```
i. sort
ii. reverse
iii. slice
iv. splice. 

```

In JavaScript, arrays can grow dynamically. Namely:

```

Indexing: O(1)

Inserting: O(n)

Deleting: O(n)

Brute-Force Searching: O(n)

Optimized Searching: O(log n)

```


### Iterations

Intimately associated with Arrays is iterating through them using loops. In JavaScript, we can use five different control structures for iterations. 

The most customizable is the **for loop**, which we can use to iterate through array indexes in almost any order. 

**forEach(**) executes a provided function once for each array element. It throws away return values and always returns undefined . forEach() will allow a callback function to mutate the current array. This callback is allowed to mutate the calling array.

**map()** creates a new array with the results of calling a provided function on every element in the calling array, and will instead return a new array. It allocates memory and stores return values.

https://codeburst.io/javascript-map-vs-foreach-f38111822c0f

If the number of iterations cannot be determined, we can use while and **do while**  loops until a certain condition is met. 

For any object, we can use the **for in** and **for of** loops to iterate through its keys and values, respectively. To get both simultaneously, we can loop through its **entries()** .

We can also break out of a loop at any time using a **break** statement, or skip ahead to the next iteration using a **continue** statement. 

For the most control, iterating through **generator** functions is the best.


