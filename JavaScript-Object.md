
#  JavaScript Object Notation 

Objects are a cornerstone of the JavaScript language. 

This article covers the solid basics of JavaScript Objects. As they say you must first walk before you can run. In JavaScript, one must first understand objects before moving on to understanding object-oriented programming.



Many built in data types such as errors, regular expressions, and functions are represented as objects in JavaScript. In order to be a successful JavaScript developer, you must have a firm grasp on how objects work. This article will teach you the basics of creating and manipulating objects in JavaScript.


Objects are composite data types which are built from primitives and other objects. 


## Creating Objects
Creating objects in JavaScript is easy. The language provides syntax known as object literal notation for quickly creating objects. Object literals are denoted by curly braces. The following example creates an empty object with no properties.

```
let object = {};


```


Inside of the curly braces, properties and their values are specified as a list of key/value pairs. Keys can be strings or identifiers, while values can be any valid expression. The list of key/value pairs is comma delimited, with each key and value separated by a colon. 

The following example creates an object with three properties using literal notation. The first property, foo, holds the number one. The second property, bar, is specified using a string, and also stores a string value. The third property, baz, stores an empty object.


```
let object = {
  foo: 1,
  "bar": "some string",
  baz: {

  }
};

```

Note the use of whitespace in the previous example.

## Accessing Properties
JavaScript provides two notations for accessing object properties.

i. The dot notation

Under dot notation, a property is accessed by giving the host object’s name, followed by a period (or dot), followed by the property name. 

```

object.foo = object.foo + 1;// Will re-render 2

```

ii. The Bracket notation
 
In bracket notation, the object name is followed by a set of square brackets. Inside the square brackets, the property name is specified as a string. The previous example of dot notation has been rewritten below to use bracket notation. While the code may look different, it is functionally equivalent to the previous example.


```
object["foo"] = object["foo"] + 1;

```
Bracket notation is more expressive than dot notation because it allows a variable to specify all or part of the property name. This is possible because the JavaScript interpreter automatically converts the expression within the square brackets to a string, and then retrieves the corresponding property. 

The following example shows how property names can be created on the fly using bracket notation. In the example, the property name foo is created by concatenating the contents of variable f, with the string "oo".


```
let f = "f";

object[f + "oo"] = "bar";

```
Bracket notation also allows property names to contain characters that are forbidden in dot notation. For example, the following statement is completely legal in bracket notation. However, if you tried to create the same property name in dot notation, you would encounter a syntax error.

```

object["!@#$%^&*()."] = true;

```

## Accessing Nested Properties
Properties of nested objects can be accessed by chaining dot and/or bracket references together. For example, the following object contains a nested object named baz, which contains another object named foo, which has a property named bar that holds the value five.


```
let object = {
  baz: {
    foo: {
      bar: 5
    }
  }
};

```

The following expressions access the nested property, bar. The first expression uses dot notation, while the second expression uses square bracket notation. The third expression combines both notations to achieve the same result.


```
object.baz.foo.bar;

object["baz"]["foo"]["bar"];

object["baz"].foo["bar"];

```

Expressions like the ones shown in the previous example can cause performance
to suffer if used improperly. Evaluating each dot or bracket expression
takes time. 
  
  If the same property is used multiple times, then it makes more sense 
  to access the property once, and then store the value in a local 
  variable for all future uses. 

  The following example uses bar many times within a loop.
  However, instead of wasting time computing the same value over and over,
  bar is stored in a local variable.


```

let bar = object.baz.foo.bar;

let count = 0;

for (var i = 0; i < 100000; i++) {
  count += bar;
  // better than count += object.baz.foo.bar;
}


```

## Functions as Methods

When a function is used as an object property, it is called a method. Like properties, methods can also be specified in object literal notation. The following example shows how this is accomplished.


```
let object = {
  sum: function(foo, bar) {
    return foo + bar;
  }
};

```

Methods can also be invoked using dot and bracket notation. The following example invokes the sum() method from the previous example using both notations.


```
object.sum(1, 2);

object["sum"](1, 2);

```

## Adding Properties and Methods

Object literal notation is useful for creating new objects, but it cannot add properties or methods to existing objects. 

Fortunately, adding new data to an object is as simple as creating an assignment statement. The following example creates an empty object. Two properties, foo and bar, and a method, baz, are then added using assignment statements. Note, that this example uses dot notation, but bracket notation would work equally as well.

```
let object = {};

object.foo = 1;

object.bar = null;

object.baz = function() {

  return "hello from baz()";
};

```

## The User Model

```
let user = {
    ID: 1,
    "student" : 
        {
        "name": "Jake",
         age:30,
         address:{
             address1: "123 kkkbbmbmnbmb uy",
             address12: "5 bmm,hjjhjkh j",
             postCode: "q12 bop"
         }
        }
    ,
    adder:{

        sum: function( a, b) {
            return a +b ;
        }

    }
}

//Accessing objects
//console.log(object.foo);

//console.log(object["foo"]);
console.log(user.ID = user.ID + 1 );

console.log(user["ID"] = user["ID"] + 2);

let k = user.student.address;

console.log(user.student.name + " is " + user.student.age + " years old and lives at "  + 
k["address1"] + " " + k["postCode"]);

console.log(user.adder.sum(2, 7));

```
## How to use the Fetch API with vanilla JS

```

fetch('url').then(response => {
    if(response.ok) {
        return response.json();
    } else{
        return Promise.reject(response)
    }
}).then(data => {
    console.log(data);
}).catch(e => {
    console.warn("Something went wrong", e)
});

```


```
fetch('https://jsonplaceholder.typicode.com/postses').then(function (response) {
	// The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

```

## The FETCH API with REACT class objects

https://github.com/kukuu/react-api-fetch-data/tree/master/fetch


## Passing argument  to FETCH API

 You can use an object as parameter with sequences of properties to hook into the FETCH

```

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' 
	+ encodeURIComponent('This is the text of my article')
}).then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

```




## Setting headers with the Fetch API 

Another common thing you might need to do is set headers and other properties for your request.
This can also be done with the options object.


```

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + 
	encodeURIComponent('This is the text of my article'),
	headers: {
		'Content-Type': 'application/json'
	},
	referrer: 'no-referrer'
}).then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

```
## Handling multitple API calls with AXIOS

Using es6 : 

1. imports
2. Spread operator to manage aggregation and update

```
import axios from "axios";

let one =
  "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
  
let two =
  "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt";

let three =
  "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios
  .all([requestOne, requestTwo, requestThree])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      const responesThree = responses[2];

      // results
      console.log(responseOne, responseTwo, responesThree);
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });

```

## The JavaScript Event Loop

- https://github.com/kukuu/AGILITY/blob/master/JavaScript-EventLoop.md


## Managing JavaScript Performance - Throttle vs Debounce

 There might be some functionality in a web page which requires time-consuming computations. 
 If such a method is invoked frequently, it might greatly affect the performance of the browser, 
 as JavaScript is a single threaded language.


Architecture - http://demo.nimius.net/debounce_throttle/

Debouncing

Debouncing is a practice used to improve browser performance. It will bunch a series of 
sequential calls to a function into a single call to that function. 
It ensures that one notification is made for an event that fires multiple times


Throttling

Throttling will delay executing a function. 
It will reduce the notifications of an event that fires multiple times. 

Examples:

If you have a function that gets called a lot - for example when a resize or mouse move event occurs,
it can be called a lot of times. 

If you don't want this behaviour, you can Throttle it so that the function is called at regular intervals.
Debouncing will mean it is called at the end (or start) of a bunch of events.


Explanation by use case:
	•	Search bar- Don't want to search every time user presses key? Want to search when user 
	stopped typing for 1 sec. Use debounce 1 sec on key press.

	•	Shooting game- Pistol take 1 sec time between each shot but user click mouse multiple times.
	Use throttle on mouse click.

Reversing their roles:

	•	Throttling 1 sec on search bar - If users types abcdefghij with every character in 0.6 sec. 
	Then throttle will trigger at first a press. 
	
	It will will ignore every press for next 1 sec i.e. bat .6 sec will be ignored. 
	Then c at 1.2 sec will again trigger, which resets the time again. 
	So d will be ignored and e will get triggered.

	•	Debouncing pistol for 1 sec- When user sees an enemy, he clicks mouse,
	but it will not shoot. He will click again several times in that sec but it will not shoot. 
	He will see if it still has bullets, at that time (1 sec after last click) pistol will fire automatically.
	
	
	
requestAnimationFrame (rAF): 

requestAnimationFrame is another way of rate-limiting the execution of a function.

It can be thought as a _.throttle(dosomething, 16). But with a much higher fidelity, 
since it’s a browser native API that aims for better accuracy.


Resource:

https://css-tricks.com/debouncing-throttling-explained-examples/

## Managing CSS 

Performance - https://github.com/kukuu/styled-components-in-ReactJS

Flexbox - https://github.com/kukuu/algorithms/tree/master/flexbox

## REACT Native API calls

https://github.com/kukuu/algorithms/blob/master/algorithms/react-native/api-calls/playground/api-calls.js 

## Status Codes

```
1xx - Informational

2xx - Success

3xxx - Redirection

4xx - Client Error

5xx - Server Error

```

https://httpstatuses.com/


## Gitflow

A complete example demonstrating a Feature Branch Flow is as follows. 
Assuming we have a repo setup with a master branch.

```
git checkout master
git checkout -b develop
git checkout -b feature_branch
# work happens on feature branch
git checkout develop
git merge feature_branch
git checkout master
git merge develop
git branch -d feature_branch

```

In addition to the feature and release flow, a hotfix example is as follows:


```
git checkout master
git checkout -b hotfix_branch
# work is done commits are added to the hotfix_branch
git checkout develop
git merge hotfix_branch
git checkout master
git merge hotfix_branch

```
Summary:

Here we discussed the Gitflow Workflow. 
Gitflow is one of many styles of Git workflows you and your team can utilize.

Some key takeaways to know about Gitflow are:

The workflow is great for a release-based software workflow.
Gitflow offers a dedicated channel for hotfixes to production.
 
The overall flow of Gitflow is:

```
A develop branch is created from master

A release branch is created from develop

Feature branches are created from develop

When a feature is complete it is merged into the develop branch

When the release branch is done it is merged into develop and master

If an issue in master is detected a hotfix branch is created from master

Once the hotfix is complete it is merged to both develop and master

```

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow


## Optimising Arrow Functions

https://medium.com/javascript-in-plain-english/5-simple-tips-to-write-better-arrow-functions-a55f40f63d58


## managing API promises with async await

api POST template:

```
import React, { Component } from 'react';
import { Stylesheet, View, Text } from 'react-native';


export default class Apicall extends Component {


    async componentDidMount(){

        try {
                await fetch('urlendpoint', {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: 'Pete',
                        password: '12333300-9jnndklf098&'
                    })
                })
        }
        catch(e) {
            console.log(e);
        }
    }

    render(){

        return (
            <View>
                <Text>
                    Hello
                </Text>
            </View>
        );
    }
}
```

## REACT

Contact List - https://github.com/kukuu/algorithms/tree/master/mcreate-react-app 

CRA scaffolding template - https://github.com/kukuu/algorithms/tree/master/mtest-app

## REACT Hooks with async/await API calls

```

import React, { useState, useEffect } from "react";

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

//Call a function in a function. Pure functions
  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

export default Planets;

```

App: https://github.com/kukuu/react-hooks/tree/master/react-hooks-api

## JWT

Architecture: https://github.com/kukuu/AGILITY/blob/master/white-paper/JWT-architecture.png

Procedures: https://jwt.io/introduction/

jwt Implementation - https://github.com/kukuu/node-token-authentication

2FA Implementation - https://github.com/kukuu/nodeJS-2-factor-authentication

## Scaffolding 

- https://github.com/kukuu/AGILITY/blob/master/README-scaffolding.md

## Systems Design Architecture

- https://github.com/kukuu/AGILITY/blob/master/system-design-architecture.md

## Software Architecture patterns

- https://github.com/kukuu/AGILITY/blob/master/white-paper/software-architecture.md

## CI/CD 

- https://github.com/kukuu/AGILITY/blob/master/white-paper/CI-CDL-CDPL-pipeline.jpgS

## Orchestrating with Kubernetes 

- https://github.com/kukuu/AGILITY/blob/master/white-paper/kubernetes/1.png


## BDD

- https://github.com/kukuu/AGILITY/blob/master/BDD.md


## Requireent gathering and feature refinement

- https://github.com/kukuu/CI-CD-pipeline-with-Jenkins/tree/master/BDD

## Selections

https://github.com/kukuu/selections

