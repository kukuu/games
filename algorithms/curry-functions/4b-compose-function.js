
//Using functions curriedSubstring and curriedLowrCase from 4
//we can use compose for the following:

const getNewComposedFirstCharacterAsLower = compose(curriedLowrCase, curriedSubstring (0) (1));

if(getNewComposedFirstCharacterAsLower("Luke") === getNewComposedFirstCharacterAsLower("Luke")){
	console.log("Both these two provide equal results");
}