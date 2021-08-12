console.log("Program to demonstrate Class");

class Employee {

    constructor(email, empid)
    {
        this.email = email;
        this.empid = empid;
    }
}


let emp1 = new Employee("aravindhb@gmail.com" , "emp1234");
console.log(emp1.email + " and " + emp1.empid);
