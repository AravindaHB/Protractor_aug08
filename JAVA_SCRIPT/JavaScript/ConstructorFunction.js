console.log("Program to demonstrate Functions");

function studentInfo(firstname, lastname)
{
    let info = {
        fn :  firstname,
        ln : lastname,
        getFullName : function() {
            console.log(`${this.fn} ${this.ln}`);
        }
    }
    return info;
}

function studentinfo2(firstname,lastname)
{
    this.firstname = firstname;
    this.lastname = lastname;
    
}
studentinfo2.prototype.getFullName = function() {
    console.log(`${this.firstname} ${this.lastname}`);
}
let student = studentInfo("Aravinda" , "HB");
console.log(student);

let student2 = new studentinfo2("Aravinda" , "HB");
student2.getFullName();

let student3 = new studentinfo2("Harry" , "HB");
student3.getFullName();

let student4 = new studentinfo2("Mahesh" , "HB");
student4.getFullName();

