// Object Destructuring

let myObject = {
    name: "Harsh",
    age:21,
    address:{
        street:"swraj Colony",
        city:"Banda",
        state:"Uttar Pradesh",
        Country:"USA",
        PassportDetails:{
            PassportNumber:"ABCD1234",
        },
    },
}
// console.log(myObject.address.state);

let {name:myName, age} = myObject;
console.log(myName , age);