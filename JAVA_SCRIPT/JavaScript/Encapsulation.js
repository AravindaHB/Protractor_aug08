console.log("Program to demonstrate Class");

class Student {
    constructor(name, id, phonenum)
    {
        this.name = name;
        this.id = id;
        this.phonenum = phonenum;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getPhoneNum() {
        return this.phonenum;
    }

}
let student = new Student("ahb","1212",898989);
console.log(student.getName());
console.log(student.getID());
console.log(student.getPhoneNum());
