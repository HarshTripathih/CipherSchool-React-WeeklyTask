// forEach()   not return anything

let array = [1,2,3,4,5];
array.forEach((value,index,arry)=>{
    value = value+1;
    let updvalue = value*value;
    console.log(arry)
    console.log(index);
    console.log(updvalue);

})