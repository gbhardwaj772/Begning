// // Even Numbers in Array
// let numbers=[1,2,3,4,5,6]
// let len= numbers.length;
// for(let i=0;i<len;i++){

//     if(numbers[i]%2===0){
//     console.log(numbers[i]);   
// }};

// // Even numbers count in Array

// let number1= [12,10,13,15,18,20]
// let len1=number1.length;
// let count=0;
// for(let i=0; i<len1; i++){

//     if(number1[i]%2===0)
//     {
//         count++;
//     }
    
// }
// console.log("Even number count in Array is- "+count);

// // Calculate the sum of number divisible by 5 in an Array
// let Num1=[7,8,1,2]
// let lent= Num1.length;
// let sum=0, TotalSum=0;
// for(let i=0; i<lent; i++){
//     if(Num1[i]%5===0){
// sum=sum+ Num1[i];

//     }
   
   
    
// }
// console.log("Sum of numbers is- "+TotalSum);

// change all array string to upper case

// let cars=['maruti','tata','jaguar','land rover','kia','nissan']
// let lent2= cars.length;
// for(let i=0; i<lent2;i++){
// let str= cars[i];
// cars[i]=str.toLocaleUpperCase();
// console.log(cars[i]);
// cars[i]=str.toLocaleLowerCase();
// console.log(cars[i]);
// }
// Define a function which takes array of numbers
//  as parameter and gives true if any prime number is present in Array


function hasPrime(number){

    
let len = number.length;
for(let i=0; i<len;i++){
    let check= isPrime(number[i]); 
    if(check)
    {
        console.log(number[i]);
        return true;
    }
}
return false;

}
function isPrime(num){
for(let i=2; i<=num-1;i++){
    if(num%i===0){
      
        return false;
    }
}
return true; 
}
let number=[1,2,3,4,5];
console.log(hasPrime(number));