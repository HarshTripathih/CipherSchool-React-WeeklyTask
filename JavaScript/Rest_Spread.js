// Rest and Spread opperator : are applicable in arrays and objects in JS

// let array = [5,10,15,20,25];

// Spread  meaning are expand and it is denoted with ->  ...  in JS
// Rest -> ...   used in overloading 

//Spread -> ...  its is used to remove the boundaries 

// console.log(array); 
// console.log(...array);

// let newArray = [...array,30 ,45, 50, 60];
// console.log(newArray);

// if you want to make a copy on any arary into a any other array you can use Spread Operators

// let newarry = [...newArray];  //it is called declonning in javaScript
// console.log(newarry);


//Rest -> ...  its is used in function

// let maxOfNumbers = (...numbers) =>{
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers){
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// };
// console.log(maxOfNumbers(1, 2, 3, 80));

// Using Rest and Spread for objects

let object = {
    name : "Harsh",
    age : 24,
    address : {
        city : "Jalandhar",
        country : "India",
        state : "Punjab",
    }

};

// let object2 = { ...object, country:"India",Songs:"rock"};

// let object2 = { ...object, name : "Harsh Tripathi"};
// console.log(object2);

let object2 = { ...object };
object2.address.city = "Phagwara";
console.log(object2);

