// P1

// Create a Json with the following details

let emp1={
    name:'Jack',
    Dept:'Tech',
    Designation: 'Manager',
    Salary: 50000,
    Raise:true
}
// console.log(emp1);

let emp2={
    name:'Mary',
    Dept:'Finance',
    Designation: 'Manager',
    Salary: 40000,
    Raise:false
}
// console.log(emp2);

let emp3={
    name:'Bill',
    Dept:'HR',
    Designation: 'Executive',
    Salary: 20000,
    Raise:true
}
// console.log(emp3);

// P2
const empArray=[emp1,emp2,emp3]
let Company={
    companyName:'Tech Stars',
    website:'WWW.techstars.site',
    Employee:empArray
}
// console.log(Company);

// P3

let emp4={
    name:'Anna',
    Dept:'Marketing',
    Designation: 'Executive',
    Salary: 41000,
    Raise:false
}
Company.Employee.push(emp4);
console.log(Company);
