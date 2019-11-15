# Making API call with REACT and REDUX


Note the architecture of passing state as props from parent to children from Containers to Components in this appication. Using HOC.

The Container delegates the API request to the Component using "handleClick". The Container subscribes to "loadColour" 
from "actions" using AXIOS,  into its "handleClick()"  handler. It then publishes it to its  child Component. 

Finally, the child Component injects "handleClick()" into its "onclick" handler in the button!! Confusing?? .

REACT depicts one of the best UI software  design patterns. Data flows in one direction from parent to children. 
Unlike working with Singletons,which can cause memory leaks as globals if not managed properly. 
When scopes go wrong, they can easily be checked and resolved in such architecture. The direction of data 
flow in the  graph is clear, and there is clear separation of functions between the Components and Containers (smart Components) where most of the 
logic appears. 

Using the Publish and Subscribe pattern, there is separation of functions. Actions are only requested when needed. Communications transpires through subscibing to actions.
This minimises latency and increase efficiency. 

Adaptors are equally good design patterns that allow and handle complex communications between systems.

Systems must have simplicity in their architecture using SOLID principles. The Single Responsibility pattern provides easy and logical reasoning relating to ownership of objects in a data graph.

Separation of functions ensures,  architecting  software  components into 3 major sections: The UI View, Controller and Data Objects. 
Views should not contain business logic, except for initialising internal states.


Creating Providers, Helpers, Connectors, Singletons and Managers only adds complexity to any software, and makes execution difficult increasing latency. Should be minimised.
They may make meaning to you, but not to many of the people who will be reading and using the software! Singletons are best used for dependency injections (DI).
Clarity in reading and understanding the code is paramount. Inheritance and Plolymorphism if not managed properly can also increaeses complexity. Composition reduces global polution. Abstraction should always be used at high level.




1. Container - https://github.com/kukuu/redux-react/tree/master/src/container 
2. Component - https://github.com/kukuu/redux-react/tree/master/src/component
3. Index - https://github.com/kukuu/redux-react/blob/master/src/index.js
