console.log("Program to demonstrate Functions");

function studentinfo2(firstname,lastname)
{
    this.firstname = firstname;
    this.lastname = lastname;
    
}
const getFullName = function(prefix, suffix) {
    console.log(`${prefix} ${this.firstname} ${this.lastname} ${suffix}`);
}

let student2 = new studentinfo2("Aravinda" , "HB");
getFullName.call(student2, "Hi, ", " is my full Name")

let student3 = new studentinfo2("Harry" , "HB");
getFullName.call(student3, "Hello, ", " is my full Name")

getFullName.apply(student3, ["Hello, ", " is my full Name"])

let fln = getFullName.bind(student3);
fln("Hello Bind , ", " is my full Name")

// let student4 = new studentinfo2("Mahesh" , "HB");
// student4.getFullName();

