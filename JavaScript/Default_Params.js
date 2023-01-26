//Default Parameters :

// function addTwonumber(num1, num2){
//     return num1 + num2;
// };

// console.log(addTwonumber(1,2));

//arrow Function :-

// let addTwonumber = (num1, num2) =>{
//     return num1 + num2;
// };
// console.log(addTwonumber(5,15));

// We can write more Shorter using arrow function

// let addTwonumber = (num1, num2) => num1 + num2;
// console.log(addTwonumber(50,50));


//One example using Default parameters

let addTwonumber = (num1, num2=5) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
};
console.log(addTwonumber(1));