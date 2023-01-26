//In java script we can declare a variable by 3 ways 
// 1=> by using var  :- Not strict : its allow you can redeclare the variable , re-assign the variable  
// 2 => by using let  :- Little strict person in the house : every thing is same as const accept one thing you can reassign a variable
// 3 => by using const  :- Strict Person in the house : const is something which will not allow you to change the referrence it is pointing to therefor we cant reassigned a variable so its throughs an error.
// Special thing is about Const and let that its not allow youu to no redeclare the variables
//Note* : Var variables are Globally Scope but let and Const are Block scope .


// const  myName = "Harsh";
// console.log(myName)
// myName = "utkarsh";    Variable assigning is not acccepted in when using const

// const myName = "tripathi"  variable decelearation is not possible

//Using Const :-
// const myName = [];
// myName.push("Harsh","utkarsh","Raj");
// console.log(myName);


 // Using let :-

//let myName = "Harsh";
//console.log(myName);
//myName = "utkarsh";  // its is accepted in JS when using let 
//console.log(myName);

// let myName = "tripathi" //is not possible to redeclare the variable


// Using var :-

var myName = "Harsh"
console.log(myName);

myName = "utkarsh";
console.log(myName);   // we can do re-assigning

var myName = "tripathi";  //We can do redecelaration
console.log(myName);


