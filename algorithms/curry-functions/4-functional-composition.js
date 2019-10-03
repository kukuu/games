// Object oriented approach
const getUglyFirstCharacterAsLower = str
  => str.substr (0, 1).toLowerCase ();


// Functional approach
const curriedSubstring = start => length => str
  => str.substr(start, length);

const curriedLowerCase = str => str.toLowerCase ();

const getComposedFirstCharacterAsLower = str
  => curriedLowerCase (curriedSubstring (0) (1) (str));