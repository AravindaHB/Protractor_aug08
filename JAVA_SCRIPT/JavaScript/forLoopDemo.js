console.log("Program to demonstrate loop");

let num = 5;
for(let i = 1; i<=10;i++)
{
    console.log(`${num} * ${i} = ${(num * i)}`);
}

let fruits = ['Apple', 'Banana', 'Grapes', 'Mango']

// in returns the index
console.log("---Printing values using in ----");
for( i in fruits)
{
    console.log(fruits[i]);
}

console.log("--- Printing values using of ----");
for(let fruit of fruits)
{
    console.log(fruit);
}

// console.log("--- Printing using foreach loop ---");
// fruits.forEach(function (fruit)
// {
//     console.log(fruit);
// });