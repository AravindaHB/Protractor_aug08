console.log("Program to demonstrate Arrays");
let marks = [45,55,65,75,85,95]
console.log(marks);
let fruits = ['Apple', 'Banana', 'Grapes', 'Mango']

console.log("Total number of elements present in an Array-->" +  fruits.length);
console.log(fruits);
fruits.push('Cherry');
console.log("Total number of elements present in an Array-->" +  fruits.length);
console.log(fruits);

fruits.pop();
fruits.pop();
console.log("Total number of elements present in an Array-->" +  fruits.length);
console.log(fruits);

fruits.shift();
console.log("Total number of elements present in an Array-->" +  fruits.length);
console.log(fruits);

fruits.unshift('Orange')
console.log("Total number of elements present in an Array-->" +  fruits.length);
console.log(fruits);

// delete fruits[1];
// console.log("Total number of elements present in an Array-->" +  fruits.length);
// console.log(fruits);

fruits.splice(0,2);
console.log("Total number of elements present in an Array-->" +  fruits.length);
console.log(fruits);

fruits.splice(1,0,'Orange','Banana');
console.log("Total number of elements present in an Array-->" +  fruits.length);
console.log(fruits);


let evennum = [2,4,6,8];
let oddnum = [1,3,5,7];

let num = evennum.concat(oddnum);
console.log(num);


let fru = fruits.slice(1,3);
console.log(fru);

console.log(fruits);








