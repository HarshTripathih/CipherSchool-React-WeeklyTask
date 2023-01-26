// Promises :- In JavaScript it is Used to prevent output from the wrong behaviour of JavaScript , like in set time out JavaScript doesnt wait wait for user command and it wll execute next line

// function addTwoNumber(num1, num2) {        // code shows wron behaviour
//     let sum = 0;
//     setTimeout(() => {
//         sum = num1 + num2;
//         console.log(sum);
//     }, 6000);
//     console.log("Inside addTwoNumber");
//     return sum;
// }
// console.log(addTwoNumber(5,5));

// Let use promisis in JavaScript

function addTwoNumber(num1, num2){

    return new Promise((fulfilled, notfulfilled) =>{

        setTimeout(()=>{
            console.log("I am Waiting for 5 sec to give Output");
            fulfilled(num1 + num2);
            
        },5000);
    });

};
addTwoNumber(10 , 5)
.then(() => {
    console.log("case is Fulfilled ");
})
.catch(()=>{
    console.log("Case is not fulfilled");
})
