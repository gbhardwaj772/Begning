// P1
// const numbers=[2];
// let count=0;
// let len=numbers.length;
// for(let i=0;i<len;i++){
// if(numbers[i]%2==0){
// count++;
// }
// }console.log('Numbers of the even value in array is',count);

// P2

// const divisibleNumber=[5,12,15];

// let len=divisibleNumber.length;
// let sum=0;
// for(let i=0;i<len;i++){
//     if(divisibleNumber[i]%5==0){
// sum=sum+divisibleNumber[i];
//     }
    
// }console.log(sum);

// P3

// const str =['hello','hi','bye','chai'];
 
// let len=str.length;
// for(let i=0;i<len;i++){
//     let strings=str[i];
//        str[i]=strings.toUpperCase();
// }
// console.log(str)

// p4--------------------------------------------Check Again---this not completed

// const Number=[5,10,11,15]
// let len=Number.length;
// let out;
// let n;
// for(let i=0;i<len;i++){
//   n=Number[i];
//   console.log(n);
//  out=isPrime(n);
//  console.log(out);
// }


// function isPrime(n){
// for(let i=2; i<n-1;i++)
// {
// if(n%i==0){
//     return false;
// }
// }
// return false;
// }

// p5

// const numbers=[];
// let count=0;
// let sum=0;
// let len =numbers.length;
// for(let i=0;i<len;i++){
//     if(numbers[i]%3==0){
// sum=sum+numbers[i];
// count++;
//     }
// }console.log('3Sum=',sum,',3Count=',count);

// P6
// const greater=[100,200,10,20,50,64]
// let count=0;
// let values=[];

// let len =greater.length;
// for(let i=0;i<len;i++){
//     if(greater[i]>21){
//         count++;
      
//         values=greater[i];
//         console.log(values);
//     }
   
// }console.log('Count=',count);

// P7

// let element=[2,3,5,7]
// let len=element.length;
// for(let i=0;i<len;i++){
//     let newElement=element[i];
// element[i]=newElement+10;
// }
// console.log(element);

// P8

// let element=[]
// let len=element.length;
// for(let i=0;i<len;i++){
//     let newElement=element[i];
// element[i]='Hello '+newElement;
// }
// console.log(element);

// P9

// const numbers=[12,12,12,12,12];

// function checkValue(Numbers){
// let len=numbers.length;
// for(let i=0;i<len;i++){
//     if(numbers[i]!==numbers[0])
// {
//         return false    
//     }    
// }
// return true;
// }
// console.log(checkValue(numbers));

// P10------------------------------------------------------------Check For value 6 condition is failing----------------

// const Arr=[6]

// let len=Arr.length;

// function Order (Arr){
// for(let i=0;i<len;i++){

//     if((Arr[i])==(Arr[i+1]-1))
//     {
//        return 'SEQUENCE';
//     }
//  else {
//     return 'NOT';
// }
// }
// }
// console.log(Order(Arr));

// // function printOrder(Arr){
// //    let out= order(Arr);
// //     // if(out==true){
// //         // console.log('SEQUENCE');
// // //     }
// // //     else{
// // //         console.log('Not');
// // //     }
// // }

// p11

// const arr=[5,18,26,30,40,6,9]
// let  newArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//        newArr.push(arr[i]);
//     }
// }console.log(newArr);

// P12

// const arr=[5,18,26,30,40,6,3]
// let  newArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//        newArr.unshift(arr[i]);
//     }
// }console.log(newArr);

// P13---------------------------------------------------------------moving to next topic-------------

// const arr=[40,6,9]

// for(let i=0;i<=arr.length+1;i++){
// arr.shift();

// }console.log(arr);
