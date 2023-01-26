// map()
// its return an array
// If question is printin the square of array without using loop

// function functionForMap(element){
//     return element * element;
// }
// let array = [1, 2, 3, 4, 5];
// let sqrarray = array.map(functionForMap);
// console.log(sqrarray);
// In Js , a function is also a JS object 

let array = [1, 2, 3, 4, 5];
let sqrarray = array.map((value, index, arry) => {
    console.log(index);
    console.log(arry);
    return value * value;

});

console.log(sqrarray);






