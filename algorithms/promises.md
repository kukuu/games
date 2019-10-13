# JavaScript Promises

i. Shell

```
const flipACoin = new Promise((resolve, reject) => {    

});

```


A Promise is a JavaScript class, and its constructor takes in a single argument: a function called the executor function. The executor function itself has two arguments called resolve and reject. The code inside the executor function runs and you call resolve() when you’re done and reject() if something goes wrong.

ii. Extending the execution function

```
const flipACoin = new Promise((resolve, reject) => {    
  const flipResult = flip(); //let's say flip() takes a few seconds
  
  if(flipResult) {
    resolve();
  } else {
    reject();
  }
});

```

iii. Interacting With Surrounding Code

Now that we’ve got a Promise running, let’s see how it interacts with the context around it. One of the most important facets of using a Promise is that even though you’ve created a Promise, the code around it keeps running!

```
console.log("I'm about to flip a coin!");

const flipACoin = new Promise((resolve, reject) => {
  console.log("I'm flipping the coin!");
  
  const flipResult = flip(); //let's say flip() takes a few seconds
  
  if(flipResult) {
    console.log("Here is the coin flip result!", flipResult);
    resolve();
  } else {
    reject();
  }
});

console.log("I have flipped the coin.")

```


and this is the output:
a. “I’m about to flip a coin!”

b. “I’m flipping the coin!”

c. “I have flipped the coin.”

d. “Here is the coin flip result! Heads”



iv. Waiting For A Promise To Finish

You can call several functions on a Promise in order to run code in response to the Promise completing. The first one we’ll discuss is .then()

```
console.log("I'm about to flip a coin!");

const flipACoin = new Promise((resolve, reject) => {
  console.log("I'm flipping the coin!");
  
  const flipResult = flip(); //let's say flip() takes a few seconds
  
  if(flipResult) {
    console.log("Here is the coin flip result!", flipResult);
    resolve();
  } else {
    reject();
  }
}).then(() => {
  console.log("I have flipped the coin.")
});

```



.then() is a function of a Promise that takes in a function that will be run after the code inside the executor function of the Promise calls resolve(). In this new snippet, the following will be the order of logs:

a. “I’m about to flip a coin!”

b. “I’m flipping the coin!”

c. “Here is the coin flip result! Heads”

d. “I have flipped the coin.”

The content of the .then() function is only called after the resolve() call, which only happens after “Here is the coin flip result! Heads” has been printed to the log. We’ve now successfully waited for the Promise to complete before doing something!

Here are all of the other Promise functions that you can use:

```
const flipACoin = new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  //use `.then()` to do something after `resolve()` has been called
}).catch(() => {
  //use `.catch()` to do something after `reject()` has been called
}).finally(() => {
  //use `.finally()` to do something either way
});

```


v. Returning Values Out Of Promises

Waiting for a Promise is useful, but it’s even more useful to be able to tell surrounding code what the resolved value of the Promise is. To accomplish this, you need two things:

a. resolve() should take in an argument

b. The function in .then() should take in a parameter

```
const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds
  
  if(flipResult) {
    resolve(flipResult);
  } else {
    reject();
  }
}).then((flipResult) => {
  console.log(`The result was ${flipResult}`);
});

```


vi. Using A Promise Later

You can  break away from promises and continue to use .then() later, so long as you have them stored in variables.

```
const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds
  
  if(flipResult) {
    resolve(flipResult);
  } else {
    reject();
  }
});

//...
//do other things
//...

console.log("Wait did I flip the coin?");

flipACoin.then((flipResult) => {
  console.log("Oh I did!");
});

console.log("Double checking...");

flipACoin.then((flipResult) => {
  console.log("Okay I definitely did!");
});

```

vii. Chaining

The most aesthetic property of promises is that they can be chained:

```
const flipACoin = new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  doSomething();
}).then(() => {
  doSomethingElse();
}).then(() => {
  doAnotherThing();
});

```

Note:

This is highly maintainable and readable because as you continue to add more things to depend on, you can simply keep adding chained .then() calls.

But there’s something tricky here that you need to know! Look at the snippet above. You might think that doSomethingElse() will wait for doSomething() to complete. But it doesn’t! Here’s why.

Every .then() call in a chain waits on the last Promise in the chain, not the .then() before it. 

That means if doSomething() takes a while, doSomethingElse() may finish executing before doSomething() is finished executing.

See: https://codepen.io/jksaunders/pen/pozmWGv
