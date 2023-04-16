// // // P1

// // // Create a Json with the following details

// let emp1={
//     name:'Jack',
//     Dept:'Tech',
//     Designation: 'Manager',
//     Salary: 10000,
//     Raise:true
// }
// // console.log(emp1);

// let emp2={
//     name:'Mary',
//     Dept:'Finance',
//     Designation: 'Manager',
//     Salary: 10000,
//     Raise:false
// }
// // console.log(emp2);

// let emp3={
//     name:'Bill',
//     Dept:'HR',
//     Designation: 'Executive',
//     Salary: 10000,
//     Raise:true
// }
// // console.log(emp3);

// // P2
// const empArray=[emp1,emp2,emp3]
// let Company={
//     companyName:'Tech Stars',
//     website:'WWW.techstars.site',
//     Employee:empArray
// }
// // console.log(Company);

// // P3

// let emp4={
//     name:'Anna',
//     Dept:'Marketing',
//     Designation: 'Executive',
//     Salary: 1000,
//     Raise:false
// }
// Company.Employee.push(emp4);
// console.log(Company);

// // for calculating the total salary to the company
// function computeSalary(CompJson){
// let Array=CompJson.Employee;
//     let total=0;
// for(let i=0;i<Array.length;i++){
// let emp=Array[i];
// total=total+emp.Salary;
// }
// return total;
// }

// let totSalary=computeSalary(Company);
// console.log(totSalary);

// function processRaise(CompJson){
// let array=CompJson.Employee;
// for(let i=0;i<array.length;i++){
//     let emp=array[i];
//     if(emp.Raise){
//         emp.Salary=emp.Salary*1.1;
//         emp.Raise=false;
//     }
// }
// }
// processRaise(Company);
// console.log(Company);
// const wfhEmps=['Anna','Sam'];
// function workFHome(compJson,wfhEmps){
// let array=compJson.Employee;
// for(let i=0;i<array.length;i++){
//     let emp=array[i];
//      emp.wfh=checkInArray(emp.name,wfhEmps);
// }
// }

// function checkInArray(value,arr ){
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==value){
//         return true;
//     }
// }
// return false;
// }

// workFHome(Company,wfhEmps);
// console.log(Company);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// P7

// let Person ={
//     name:'Mark',
//     email:'mark@email.com',
//     salary:80000
// }
// console.log(Person);

// P8
//  let ConsData={
//     billid:45661,
//     amount:2500
//  }
//  console.log(ConsData);

//  function updateAmount(value){
// value.amount=2700;
//     let newAmount=value.amount;
    
//  }
//  updateAmount(ConsData)
//  console.log(ConsData);

// P9

// let ConstData1={
//     billid:401,
//     amount:200
// }

// let ConstData2= {
//     billid:402,
//     amount:500
// }

// function SumOFAmount(CompJson1,CompJson2){
// let Tt=CompJson1.amount+CompJson2.amount;
// return Tt;
// }

// let total=SumOFAmount(ConstData1,ConstData2);
// console.log('The sum of amount',total);

// P10

// let newFirm={

// };

// function addData(compJson){
// compJson.id='EMP123';
// compJson.email='emp1223@email.com';
// compJson.company='EMP Inc.';
// }
// addData(newFirm);
// console.log(newFirm);

// P11

// Prod1={
//     code:'PX101',
//     stock:15,
//     price:30
// }
// // console.log(Prod1);
// Prod2={
//     code:'PX102',
//     stock:24,
//     price:20
// }
// // console.log(Prod2);
// Prod3={
//     code:'PX103',
//     stock:33,
//     price:10
// }

// // console.log(Prod3);

// // P12
    
// const ProddArr=[Prod1,Prod2,Prod3];
// Shop={
//     product:ProddArr
// }
// // console.log(Shop);

// function compute(ShopJson){
// let total=0;
// let array=ShopJson.product
// for(let i=0;i<array.length;i++){
    
//   let Prot=array[i];
// total=total+Prot.stock;

//     }
//     ShopJson.totalStockQty=total;
//     return total;
// }

// compute(Shop);
// console.log(Shop);


// Prod4={--------------------------------------------------Moving to the next topic-------------
//     code:'PX104',
//     stock:10,
//     price:40

// }