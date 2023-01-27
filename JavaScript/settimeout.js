// java script dosent wait for any one 

function addition() {
    let a = 24;
    let b = 10;
    let sum = 0;
    if (sum > 30) {
        setTimeout(() => {
            sum = a + b;
            console.log("I am inside an setTimeout : " ,sum);   
        },5000);
    }
    else{
        console.log("i am outside the set time out function",sum);
    }
}
addition();

