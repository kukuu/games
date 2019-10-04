# Map & ForEach Defined


forEach() — executes a provided function once for each array element.

map() — creates a new array with the results of calling a provided function on every element in the calling array.


The forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.


Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

foreach loop processes an instance of each element in a collection in turn, while a for loop can work with any data and is not restricted to collection elements alone. 

This means that a for loop can modify a collection - which is illegal and will cause an error in a foreach loop.

## Which is better?

That depends on what you’re trying to accomplish. forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out:

```
let arr = ['a', 'b', 'c', 'd'];
arr.forEach((letter) => {
    console.log(letter);
});
// a
// b
// c
// d
```


And map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(),filter(), reduce(), etc.)

```

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]

```


What we’re doing above is first mapping over arr and multiplying every element in the array times 2. After this, we filter through the array and only save the elements that are greater than 5. This leaves us with a final arr2 of [6,8,10].



## Note;

jsPerf is a great website for testing the speed of different JavasScript methods and functions.

i. Just about anything you can do with forEach() you can do with map(), and vise versa.


ii. map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.


iii. forEach() will allow a callback function to mutate the current array. map() will instead return a new array.