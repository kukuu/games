/*
This is an example of currying applied on a familiar JavaScript
 method and generating new functions using it:

*/

//JavaScript substring
//str.substring(start[, length])

const curriedSubstring = start => length => str => str.substring(start, length);

const getSubstring = (start, length, str) => curriedSubstring (start) (length) (str);

const getFirstCharacters = (length, str) => curriedSubstring (0) (length) (str);

const getFirstCharacter = str => curriedSubstring (0) (1) (str);
