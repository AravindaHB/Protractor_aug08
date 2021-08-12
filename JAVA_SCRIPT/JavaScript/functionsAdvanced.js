console.log("Program to demonstrate Functions");

//Normal function 
function avg(a, b)
{
    let c =(a + b) /2 ;
    return c;   
}

console.log(avg(5,5));

//Function : with Function Expression is also called as Anonymous Function
let newAvg = function (a,b)
{
    let c =(a + b) /2 ;
    return c;  
}
console.log("Average by using function expression : " + newAvg(25,25));


//Functions: Arrow Functions similor to Function Expression 
let funExpAvg = (a,b) =>
{ 
    let c =(a + b) /2 ;
    return c; 

}
console.log("Average by using Arrow unction expression : " + funExpAvg(215,215));

let funArrow = (a,b) => (a+b) /2;
console.log("Average by using Arrow unction expression : " + funArrow(25,215));