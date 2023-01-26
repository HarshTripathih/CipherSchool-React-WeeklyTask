// .sort()

// array = [50,40,30,10,20,111];
// let sortedArray = array.sort();
// console.log(sortedArray);

array = [50,40,30,10,20,111];
//this is a comparative function in javaScript
let sortedArray = array.sort((el1, el2) =>{
    el1 =Number(el1);
    el2 =Number(el2);
    return el1 - el2;
});

console.log(sortedArray);