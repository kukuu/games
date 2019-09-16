
//Author: Alexander Adu-Sarkodie

//Pure javascript method to deep clone object

//How to copy JavaScript object to new variable NOT by reference?
//Importance: You can keep your copy in case you lose pointer to your original reference

//Clone

function keepCloning(objectpassed) {
  if (objectpassed === null || typeof objectpassed !== 'object') {
     return objectpassed;
  }

// give temporary-storage the original obj's constructor
var temporaryStorage = objectpassed.constructor();

	//Loop through object signature
  for (var key in objectpassed) {
    temporaryStorage[key] = keepCloning(objectpassed[key]);
  }

  return temporaryStorage;
}

//Testing changes in object values
var employeeDetailsOriginal = {  name: 'Luca', age: 25, Profession: 'Software Engineer' };

var employeeDetailsDuplicate = (keepCloning(employeeDetailsOriginal));

employeeDetailsOriginal.name = "Alex";

console.log(employeeDetailsOriginal);
console.log(employeeDetailsDuplicate);