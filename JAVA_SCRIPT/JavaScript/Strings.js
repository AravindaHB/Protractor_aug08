console.log("Program to demonstrate Strings");
const fn = "Aravinda";
const ln = "HB";
const birthYear = 1983;
const currentYear = 2021;
const address = "No. 211, BTM 1st Stage, Bangalore "

console.log(fn.indexOf("i"));
console.log(fn.indexOf("a"));
console.log(fn.lastIndexOf("a"));
console.log(fn.toUpperCase());
console.log((fn.toLowerCase()));
console.log(address.split(","));

const userinfo = "User Name is " + fn + " " + ln + " and user is " + (currentYear - birthYear) + " years old ";
console.log(userinfo);

//string templet literal
const userinfonew = `User name is ${fn} ${ln} and user is ${(currentYear - birthYear)} year old`;
console.log(userinfonew);