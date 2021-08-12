let a = 10;
let d = 20;
let c = "10";
let b = 10;
console.log(`Equals : ${a == b}` );

console.log(`Equals with type: ${a === b}` );

console.log(`Equals : ${a == c}` );

console.log(`Equals with type: ${a === c}` );

console.log(`Not Equals : ${a != b}` ); // false

console.log(`Not Equals with type: ${a !== b}` ); //false

console.log(`Not Equals with type: ${a !== c}` ); //true

console.log(` d is greater thatn a : ${d > a}`); //true

console.log(` a is less than d : ${a < d}`); //true

console.log(`Ternary : ${(a>d)?"A is Greater ": "D is greater"}`);