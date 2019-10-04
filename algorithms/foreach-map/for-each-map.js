

let arr = [1, 2, 3, 4, 5];

//ForEach:
//Note that you would never return from a forEach function as the return values are simply discarded:

arr.forEach((num, index) => {
    return arr[index] = num * 2;
});

//Ressult

// arr = [2, 4, 6, 8, 10]


// Map:

let doubled = arr.map(num => {
    return num * 2;
});

//Result:
// doubled = [2, 4, 6, 8, 10]