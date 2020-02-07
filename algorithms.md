# Algorithms

Applied to code, an algorithm is just a function that transforms a certain input data structure into a certain output data structure. The logic inside decides the transformation.

First and foremost, the inputs and outputs should clearly be defined, ideally, as unit tests. This requires fully understanding the problem at hand, which is not to be underestimated, because a thorough analysis of the problem can surface the solution naturally, without needing to write any code.

Once the problem domain is thoroughly grasped, brainstorming of the solution space can begin. What variables will be needed? How many loops and what kinds? Are there any clever built-in methods that can help? Edge cases to consider? Complex or repeated logic can be difficult to read and understand. 

Can helper functions be extracted or abstracted? An algorithm usually needs to be scalable. As input sizes grow, how will the function perform? Should there be some kind of caching mechanisms? Generally, memory optimizations (space) will need to be sacrificed for performance gains (time).

Finally, think about re-factoring and modularising at a stage.

Types of Algorithms - https://github.com/kukuu/algorithms/tree/master/algorithms

## The Big O notation

A theoretical measure of the execution of an algorithm, usually the time or memory needed, given the problem size n, which is usually the number of items. Informally, saying some equation f(n) = O(g(n)) means it is less than some constant multiple of g(n). 

## Bubble sort

Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.


# Software Design Architecture & Management

```
Managing Component dependencies: 
```


Think of a software as a number of dependencies between different  sections  of the application. This will ineffectively help to manage risks and conflicts  as application  grows.

At any point of the application's growth, if you add different  libraries, this should not affect teams building  on the surfaces of the application from different perspectives - Separation of function - Listov substitution.

Break project into independent components and have key dependencies shared where needed. 

Manage data flow between objects other than leaving it to a bunch of singletons. This can be a tangled mess.


```
Simplicity:
```


Simplicity  is key, and one way data flow should manage data control. Best practices is to limit the number of objects to:

i. View

ii. Controller

iii. Data objects 

Don't  complicate with managers, providers, executioners, helpers etc.

When data flow is one way is easy to reason. Views should be leaf nodes where data flows into and not to come back. Must have no business  logic. If there is a bug you will quickly know where is coming  from, and debug.

Data layer must contain minimum logic rules other than that affecting internal states. Including initialisation.

Adopting a Single responsibility pattern makes it easy to reason about whatever a class in a bunch of them is doing. When a class is becoming  too big, and not being able to reason this is time to think about refactoring.


```
Ownership graph:
```


Another good practice is to follow the ownership  graph of the overall project. Taking a look at which object  owns which and dependencies  between them.

Data should  flow from parent to child. As soon as there are two parents modifying a child there could be potential conflict and symptom of code smell and memory  leaks.

This is where singletons  become a problem  - flowing all over in the system if not properly managed.  They are better  managed  through DI (Dependency Injection). This can make them more testable to. They are good in such a way that they dont have dependencies and teams can create their own, but they bring along  two way data flow/communication. A talking to B, B talking to A and C etc. Becomes complicated like a kitchen  sink and spaghetti.  If you have a bunch of them in an application un-manged they can cause chaos, and uncontrolled.


```
Communication patterns:
```


This then brings the need to think about  communication  patterns in the application's state. Instead of communicating directly between one another, they can issue notifications  for other singletons to listen to them. This will take care of two way data flow.

The notification should come from a central  hub, with singletons  broadcasting their own actions. But not letting anyone  take these actions if not needed.

A variation  of this  is for singletons  to expose a publish , subscribe interface. Here the system has a single broadcasting object,  and many listener objects  awaiting  on that.

This is the Publish, Subscribe interface.  One of the best design patterns. Versatile  and encourages  one way data flow - as in REACT.

Another variation  of this is the Delegate pattern. An object gives a callback explaining what it is doing.

Like the publish/subscribe, but here there is only single delegate pattern. With some integration  with the host objects. 

The observer pattern also uses notication for broadcasting, but unlike Publish/Subscribe which uses Messagin, the Observer uses handlers (AngularJS)




```
Inheritance:  
```

Inheritance is a poor OO design pattern if not architected  well. If poorly managed you can have a sub class  communicating with a super class,  further on to another super, super etc and can bs messy. Over a period they become deeply tied to each other becoming difficult  or impossible  to refactor. 



```
Containment:
``` 

Instead of inheritance one can take s look  at containment  pattern. 

Here a class can contain other objects and controllers. It can deligate behaviour  to any of its members to help compose behaviours - mixing and matching without getting into the internal structure  of polymorphism,  and other known inheritance patterns. 


```
Lazy initialization:
```

There is also lazy intialization when you dont create objects  until you need them. Using the Module pattern with Typescript where you can have loading on demand. Great way to increase start up performance  time, including usage in Server Side Rendering.

With the adapter pattern,  you can have many different  types of objects, methods and APIs. Using adaptors you can match them to certain APIs and interfaces, enabling you to  perform common set up operations. The adaptor pattern can be performed with protocols or class wrappers.

```
Factory:
```

This is another  pattern that can be used on heterogeneous  components. Singletons per say. 

There are also mixins, and   plug ins.


```
Anti-pattern
```

Chain of responsibility

There is also the chain of responsibility  pattern. Common in hierarchical or tree structures. 

This is a standard  technique of communicating  events upwards.  The child will issue an event and the parent will try to handle it. If it cant, it will continue to bubble  upwards to grand parents, great grand parents  and further  above. Until it reaches top. This is an anti-pattern   as it involves  two way data flow.


Just "Keep it Stupidly Simple (KISS)". Benefit of a design pattern must outweigh  overhead and investment costs of introducing it. 

# Coding


### Shallow and Deep clones

https://github.com/kukuu/algorithms/tree/master/algorithms/copy-clone

### Working with DEFAULT parameters - moving away from OLD to NEW school

https://github.com/kukuu/algorithms/blob/master/algorithms/es6/default-params/default-params.md

### Fibonacci

https://github.com/kukuu/algorithms/blob/master/algorithms/fibonacci.md 

https://github.com/kukuu/algorithms/blob/master/algorithms/fibonnaci.js


### map, filter , reduce

https://github.com/kukuu/javascript/tree/master/map-filter-reduce

https://github.com/kukuu/Apps-WebServices/blob/master/axios/examples/REACT/standard.jsx 

https://github.com/kukuu/Apps-WebServices/blob/master/axios/examples/all/index.html 

### Counter

https://github.com/kukuu/javascript/blob/master/counter/counter.jsx 

https://github.com/kukuu/javascript/blob/master/counter/index.html

### Anagrams

https://github.com/kukuu/algorithms/blob/master/algorithms/anagram.md 

https://github.com/kukuu/algorithms/blob/master/algorithms/anagrams.test.js

### Data Structures 

https://www.freecodecamp.org/news/the-top-data-structures-you-should-know-for-your-next-coding-interview-36af0831f5e3/

###  Game: Rock, Paper & Scissors - Beat the Computer!

This is  a web application GAME - Rock, Paper & Scissors, using vanilla JavaScript with some of its best practices. Including es6 and some new  JavaScript API objects.

This game has been engineered to be played against the Computer. 

You can read more on the game from here - https://en.wikipedia.org/wiki/Rock–paper–scissors. 

Note, the semantics  in descriptive names of the caching variables for the DOM elements.

The application's JavaScript document is versioned, and documented to reflect the iterations which went on in building the application (app.js[main], ap-v1.js, ap-v2.js, ap-v3.js,  ap-v4.js,  ap-v5.js). This is done for tutorial, coaching and learning purposes, and has substantial comments. The final output (app.js)is optimised. This MUST be understood.


### EJS Templating in Node.js Application

https://github.com/kukuu/javascript/tree/master/ejs/routes 

https://github.com/kukuu/javascript/blob/master/ejs/server.js


### Unit Test
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


### TDD

gulp.js
,,,

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    babel = require('babel-register');

gulp.task('test', function() {
    return gulp.src(['test/*.js'])
        .pipe(mocha({
            compilers:babel
        }));
});

gulp.task('tdd', function() {
    return gulp.watch('test/*.js', ['test']);
})


gulp.task('tdd-single', function() {
    return gulp.watch('test/*.js')
        .on('change', function(file) {
            gulp.src(file.path)
                .pipe(mocha({
                compilers: babel
            }))
        });
});

,,,



### FizzBuzz

https://github.com/kukuu/siliconlabs/blob/master/fizzBuzz/fizzbuzz.md 

### JavaScript Algorithms 

https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038 


### lowest common multiple

https://www.gcflcm.com/lcm-of-24-and-36 


### Filter list in  Python
https://github.com/kukuu/python/blob/master/filter-list 

### Making API calls with  AXIOS and  async / await

i. https://github.com/kukuu/microservices-nodejs-docker-nginx/blob/master/search/src/app.js 


ii. https://github.com/kukuu/secure-restful-react-redux-web-app/blob/master/bookworm/bookworm-react/src/api.js


### Hashing password with bcrypt

https://github.com/kukuu/siliconlabs/blob/master/bcrypt

### Snippets

https://github.com/kukuu/AGILITY/blob/master/white-paper/architectural-solutions/snippets.md


### Code Review tips

#### Functional

1. SOLID: Does the code follow SOLID principles?

i. Single responsibility principle
A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.


ii. Open–closed principle
"Software entities ... should be open for extension, but closed for modification."

iii. Liskov substitution principle
"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." 

iv. Interface segregation principle
"Many client-specific interfaces are better than one general-purpose interface.

v. Dependency inversion principle
One should "depend upon abstractions, concretions."


2. Check for null pointers where exceptions are needed.

3. Buffer Overflows

4. Integer overflows

5. Uninitialised objects

6. DRY: Are re-usble properties, routines being cached?

7. Formatting: Where are the spaces and line breaks? Are they using tabs or spaces? How are the curly braces laid out?

8. Style: Are the variables/parameters declared as final? Are method variables defined close to the code where they’re used or at the start of the method?

9. Naming: Do the field/constant/variable/param/class names conform to standards? Are the names overly short?

10. Test coverage: Is there a test for this code?

11. Race conditions: Any global polution? Leakages? Managing callbacks and side effects.

12. Design patterns: What design patterns are used in the new code? Any anti-patterns (in loops etc)

13. Lines of code: Are functions too long?

14. Using modern syntaxes (ES6): Arrow functions, default parameters, block scoping, template strings, spread operators, generator functions, destructuring etc

15. Optimisation in multi-threaded code

#### Security

Attacks and vulnerabilities

1. DoS - denial of service attacks

2. XSS - Cross Site Scripting

3. MIM - Man in the Middle

4. CSRF - Cross Site Request Forgery (use CSRF token implementation )

5. CORS

##### Metrics Tools  

1. Morgan - for logging vulnerabilities

2. SNYK - Checking vulnerabilities in NPM and other packages in CI/CD pipeline

3. Prometheus - The Prometheus server works on the principle of scraping, i.e., invoking the metrics endpoints of the various nodes that it is configured to monitor. It collects these metrics at regular intervals and stores them locally. The nodes expose these over the endpoints that the Prometheus server scrapes.

4. Helmet - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help! It includes a  11 packages that all work to block malicious parties from breaking or using an application to hurt its users.

5. Alertmanager -  The Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of deduplicating, grouping, and routing them to the correct receiver integrations such as email, PagerDuty, or OpsGenie. It also takes care of silencing and inhibition of alerts.

6. Kibana - Kibana is an open-source data visualization and exploration tool used for log and time-series analytics, application monitoring, and operational intelligence use cases. It offers powerful and easy-to-use features such as histograms, line graphs, pie charts, heat maps, and built-in geospatial support.

# Technopedia 

https://github.com/kukuu/Technopedia/blob/master/README.md
