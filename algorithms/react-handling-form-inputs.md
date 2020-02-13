# Implementing Single onChange Handler on multiple Inputs with in React

When creating a form with React components, it is common to use an onChange handler to listen for changes to input elements and record their values in state. Besides handling just one input, a single onChange handler can be set up
to handle many different inputs in the form.

## A Single Input

The onChange handler will listen for any change to the input and fire an event when the value changes.
With a text input field, we can pass the onChange prop:

```
<label>
  First name
  <input
    type="text"
    onChange={handleChange}
  />
</label>

```

The value of the prop is the handleChange function; It is an event handler. 
The event that the handler receives as a parameter is an object that contains a target field. 
This target is the DOM element that the event handler is bound to (ie, the text input field). 
By accessing this field, we can determine what the target's value is changed to:

```
  function handleChange(evt) {
  console.log("new value", evt.target.value);
}

```
## A Controlled Component - Using HOOKS

But this change handler, so far, is rather useless. Instead, we can imagine that the change handler should
listen for changes and save the new changes in internal state for later form submission.
In order to accomplish this, it is common to set up the input field as a controlled component, 
meaning that React state drives its value in the UI - REACT HOOKS. 
To do this, we'll add some React state and set the input field's value prop with it:

```

import React from "react";
function Form() {
  const [state, setState] = React.useState({
    firstName: ""
  })
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

```
