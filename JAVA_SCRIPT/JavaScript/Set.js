console.log("Program to demonstrate Class");
const grade =  new Set();

grade.add("A");
grade.add("B");
grade.add("C");
grade.add("D");
console.log(grade.size);

grade.forEach(element =>{
    console.log(element);
})

console.log(grade.has("A"));