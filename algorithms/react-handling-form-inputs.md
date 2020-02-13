# REACT - Handling multiple Inputs with Single onChange Handler

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
## A Controlled Component - Using pure functions (HOOKS)

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
Then we'll make the handleChange function update the state with the setState function:

```
function handleChange(evt) {
  setState({ firstName: evt.target.value });
}

```
## Multiple Inputs

What if we add another input to the mix? Instead of just a first name field, we add a last 
name field as a second text input field:

```
import React from "react";
function Form() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

```
Note 1:  A new lastName string has been added to state to store the data from this input,
and each of the input elements have a new name prop. These name props will show up in the DOM as a name attributes on the input HTML elements. We'll consume them in an adjustment to the handler code:

```
function handleChange(evt) {
  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}

```
Note 2:

i. In addition to getting the value from the event target, we get the name of that target as well. This is the essential point for handling multiple input fields with one handler. We funnel all changes through that one handler but then distinguish which input the change is coming from using the name.

ii. This example is using [evt.target.name], with the name in square brackets, to create a dynamic key name in the object. Because the form name props match the state property keys, the firstName input will set the firstName state and the lastName input will separately set the lastName state.

iii. Also note that, because we are using a single state object that contains multiple properties, we're spreading (...state) the existing state back into the new state value, merging it manually, when calling setState. This is required when using React.useState in the solution.


## TextArea Inputs

textarea inputs functions exactly as <input type="text" /> does andhandleChange` remains unchanged:

```
import React from "react";
function Form() {
  const [state, setState] = React.useState({
    bio: ""
  })
  return (
    <form>
      <label>
        Bio
        <textarea name="bio" value={state.bio} onChange={handleChange} />
      </label>
    </form>
  );
}

```
## Select Inputs

The select element, beyond its DOM structure being defined slightly different, 
is the same in the way it publishes changes and consumes values:

```
import React from "react";
function Form() {
  const [state, setState] = React.useState({
    version: "16.8"
  })
  return (
    <form>
      <label>
        Favorite version
        <select name="version" onChange={handleChange} value={state.version}>
          <option value="16.8">v16.8.0</option>
          <option value="16.7">v16.7.0</option>
          <option value="16.6">v16.6.0</option>
          <option value="16.5">v16.5.0</option>
        </select>
      </label>
    </form>
  );
}

```
## Radio Inputs

The <input type="radio" />  value prop is static, representing the option to select. The name is duplicated and must match across the radio buttons that make up the radio button group. The checked prop is introduced with a condition that determines whether that particular button is shown as active or not.

```
import React from "react";
function Form() {
  const [state, setState] = React.useState({
    level: "master"
  })
  return (
    <form>
      <div>
        Level
        <label>
          Acolyte
          <input
            type="radio"
            name="level"
            value="acolyte"
            checked={state.level === "acolyte"}
            onChange={handleChange}
          />
        </label>
        <label>
          Master
          <input
            type="radio"
            name="level"
            value="master"
            checked={state.level === "master"}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}

```
## Checkbox Inputs

The <input type="checkbox" /> element will look a bit like the radio button, in that it utilizes the checked prop.
But checkboxes are independent controls, not existing in a group, thus they have unique name props 
like most other inputs:

```
import React from "react";
function Form() {
  const [state, setState] = React.useState({
    hooks: true
  })
  return (
    <form>
      <label>
        With hooks
        <input
          type="checkbox"
          name="hooks"
          checked={state.hooks}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

```


There is an important change necessitated with checkboxes,
and that is an adjustment to the handleChange function:

```
function handleChange(evt) {
  const value =
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}

```

Note: 

The important change here is in the determination of the value.

A checkbox doesn't contain a string value like text inputs or text areas, and it doesn't contain 
static options like selects or radio buttons. 
Instead, it simply knows whether it's on or off. 
Thus we have to extract its value in a one-off kind of way, 
checking for the evt.target.type to equal "checkbox" and then looking to evt.target.checked for the value.

Note also that the checked prop is a boolean and, thus, the hooks property in state is also of type boolean.
