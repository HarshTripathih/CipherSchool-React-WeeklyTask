// String Interpolation 

let firstName = "Harsh";
let lastName = "Tripathi";

// console.log(firstName + " " + lastName);
//let fullName = firstName + " " + lastName;  // its waste most of the space of memory
let fullName = `${firstName} ${lastName}`;  // this syntax call stringInterpolation in Java Script, by this space of memory does not waste
console.log(fullName);