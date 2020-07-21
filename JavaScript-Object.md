
//The User Model

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
let k = user.student.address;
//Accessing objects
//console.log(object.foo);

//console.log(object["foo"]);
console.log(user.ID = user.ID + 1 );

console.log(user["ID"] = user["ID"] + 2);

console.log(user.student.name + " is " + user.student.age + " years old and lives at "  + k["address1"] + " " + k["postCode"]);

console.log(user.adder.sum(2, 7));
