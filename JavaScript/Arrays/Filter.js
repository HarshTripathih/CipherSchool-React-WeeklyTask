//filter()

let array = [10,20,30,40,50];
let newarr = array.filter((value,index,arry)=>{
    if(value >= 30){
        return value;
    }
});
console.log( ...newarr);