console.log("Program to demonstrate Functions");

//Normal function 
function calAge(birthYear)
{
    return 2021-birthYear;
}

//Function : with Function Expression is also called as Anonymous Function
let calAge2 = function (birthYear)
{
    return 2021-birthYear; 
}
console.log(" function expression : " + calAge2(1984));


//Functions: Arrow Functions similor to Function Expression 
let calAge3 = (birthYear) =>
{ 
    return 2021-birthYear; 

}
console.log(" Arrow unction expression : " + calAge3(1980));

let calAge4 = (birthYear) =>  2021-birthYear; 
console.log(" Arrow unction expression : " + calAge4(1985));