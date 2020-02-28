# REACT Conditional Rendering

you can use plain JavaScript which includes if else statements, ternary operators, switch case statements, and much more. In a conditional render, a React component decides based on one or several conditions which DOM elements it will return. 

For instance, based on some logic it can either return a list of items or a text that says "Sorry, the list is empty". When a component has a conditional rendering, the appearance of the rendered component differs based on the condition.


## IF

```

const users = [
  { id: '1', firstName: 'Robin', lastName: 'Wieruch' },
  { id: '2', firstName: 'Dennis', lastName: 'Wieruch' },
];
function App() {
  return (
    <div>
      <h1>Hello Conditional Rendering</h1>
      <List list={users} />
    </div>
  );
}
function List({ list }) {
  if (!list) {
    return null;
  }
  return (
    <ul>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
function Item({ item }) {
  return (
    <li>
      {item.firstName} {item.lastName}
    </li>
  );
}


```


## IF ELSE

Avoid using IF ELSE. (ii)  below is  more readable than (i) if else conditional rendering. All the guards are neatly aligned as single if statements before the main return statement which can be interpreted as an implicit else statement too. Still, none of the if and else statements were used inside the return statement yet.

For a better user experience you may want to show a text as feedback for your user when the list is empty for a better user experience.  Not just being empty:

1. 

```

function List({ list }) {
  if (!list) {
    return null;
  }
  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return (
      <div>
        {list.map(item => (
          <Item item={item} />
        ))}
      </div>
    );
  }
}


```

I suggest to use single if statements every time you want to guard your main return (here: returning the list) as a best practice:

ii.

```

function List({ list }) {
  if (!list) {
    return null;
  }
  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  }
  return (
    <div>
      {list.map(item => (
        <Item item={item} />
      ))}
    </div>
  );
}


```

The above is more readable than the previous if else conditional rendering


## The TERNARY operator

 This is another way to express an if else statement in JavaScript is the ternary operator:

```
// if else
function getFood(isVegetarian) {
  if (isVegetarian) {
    return 'tofu';
  } else {
    return 'fish';
  }
}
// ternary operator
function getFood(isVegetarian) {
  return isVegetarian ? 'tofu' : 'fish';
}

```


Imagine your component shows either a preview or edit mode. The condition is a JavaScript boolean which comes in as React prop. You can use the boolean to decide which element you want to conditionally render.

The parentheses () around both implicit return statements in the ternary operator enable you to return a single or multiple HTML elements or React components from there. If it's just a single element though, you can omit the parentheses.

If the wrapper between the () grows too big, consider extracting it as a component.

```

function Recipe({ food, isEdit }) {
  return (
    <div>
      {food.name}
      {isEdit ? (
        <EditRecipe food={food} />
      ) : (
        <ShowRecipe food={food} />
      )}
    </div>
  );
}

```



## The && operator (short-circuit evaluation)

This operator can be used to make 'null' more concise.  The logical && operator helps you to make conditions that would return null more concise. 

In JavaScript:

```
 true && 'Hello World' always evaluates to 'Hello World'. 

```

```
 A false && 'Hello World' always evaluates to false

 ```

 Rather than


```

 function LoadingIndicator({ isLoading }) {
  return <div>{isLoading ? <p>Loading...</p> : null}</div>;
}

```

Use the short circuiting below if you want to return nothing or the JSX

```
function LoadingIndicator({ isLoading }) {
  return <div>{isLoading && <p>Loading...</p>}</div>;
}

```

## SWITCH CASE

In cases where we evaluate to multiple conditional renderings, this can be used.

Instead of:

```
function Notification({ text, status }) {
  if (status === 'info') {
    return <Info text={text} />;
  }
  if (status === 'warning') {
    return <Warning text={text} />;
  }
  if (status === 'error') {
    return <Error text={text} />;
  }
  return null;
}

```

You can do this:

```
function Notification({ text, status }) {
  switch (status) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}

```

Note if a component has a conditional rendering based on a string, it makes sense to describe the interface of the component with TypeScript:


```
type Status = 'info' | 'warning' | 'error';
type NotificationProps = {
  text: string;
  status: Status;
};
function Notification({ text, status }: NotificationProps) {
  switch (status) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}

```

You can combine a switch statement with conditional rendering in REACT by making the statement SELF EXECUTION (IIFE)


```
function Notification({ text, status }) {
  return (
    <div>
      {(function() {
        switch (status) {
          case 'info':
            return <Info text={text} />;
          case 'warning':
            return <Warning text={text} />;
          case 'error':
            return <Error text={text} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

```

You can make it terse with an arrow functon:




```
function Notification({ text, status }) {
  return (
    <div>
      {(() => {
        switch (status) {
          case 'info':
            return <Info text={text} />;
          case 'warning':
            return <Warning text={text} />;
          case 'error':
            return <Error text={text} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

```

## MULTIPLE CONDITIONAL RENDERINGS 

A JavaScript object with key value pairs for a mapping is called an enum:

```
const NOTIFICATION_STATES = {
  info: 'Did you know? ...',
  warning: 'Be careful here ...',
  error: 'Something went wrong ...',
};

```


An enum is a great way to handle conditional rendering with multiple conditions in React -  switch case statements on steroids, because they can be used within the JSX. Let's consider the notification component again, but this time with an enum as inlined object (inner curly braces):


```

function Notification({ text, status }) {
  return (
    <div>
      {
        {
          info: <Info text={text} />,
          warning: <Warning text={text} />,
          error: <Error text={text} />,
        }[status]
      }
    </div>
  );
}

```


The status property key helps us to retrieve the value from the object. Neaater than using SWITCH statements.


In this example, we had to use an inlined object, because the values of the object depend on the text property. If it wouldn't depend on the text property, you could use an enum as a constant for the conditional render:


```

const NOTIFICATION_STATES = {
  info: <Info />,
  warning: <Warning />,
  error: <Error />,
};

function Notification({ status }) {
  return (
    <div>
      {NOTIFICATION_STATES[status]}
    </div>
  );
}

```

This cleans things up in the JSX. If we would still rely on the text property from before, we could use a conditional rendering with a function to retrieve the value too.

The enum conditional rendering in React is much more preferred than the switch case statement. Objects as enums open up plenty of options to have multiple conditional renderings. Permutations of booleans are also possible too.

```

const getNotification = text => ({
  info: <Info text={text} />,
  warning: <Warning text={text} />,
  error: <Error text={text} />,
});

function Notification({ status, text }) {
  return <div>{getNotification(text)[status]}</div>;
}


```
