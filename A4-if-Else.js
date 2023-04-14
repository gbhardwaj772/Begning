//  if n is odd then add 1 to n;
// let n=1;
// if(n%2!==0){
//     n=n+1;
//     console.log(n);
// }
// else{
//     console.log(n);
// }

// check num is divided by 2,3,6

// let sum=60;
// let num1=2;
// let num2=3;
// let num3=6;
// if(sum%num3===0 ){
//     console.log('Divisible by 6');
// }
// else if(sum%num2===0){
//     console.log('Divisible by 3');
// }
// else if(sum%num1===0){
//     console.log('Divisible by 2');
// }
// else{
//     console.log('Not divisible by 2 or 3');
// }
//  print when n=8 then o/p JKJKJKJK


// let size =1;
// let str='';
// for(let i=1;i<=size;i++){

//     if(i%2===1){
//         str=str+'J';
//     }
//     else {
//         str=str+'K';
//     }
// }
// console.log(str);

// Check given number is prime or composit
// For prime number there will not be any factor between 2 and (n-1) where n is the number 
// let count=0;
// let n=1;
// for(let i=2;i<=(n-1);i++){
// if(n%i===0){
//     count++;
// }
// }
// if(count===0){
//     if(n===1){
//         console.log('1 is Not prime nor Composit');
//     }
//     else {console.log('Number is Prime');
//     }
// }
// else{
//     console.log('Number is Composit');
// }
// 1- If number is odd then add 1 to it

// let n=6;
// if(n%2===1){
//     n=n+1;
//     console.log('Number is odd');
// }
// else {
//     console.log('Number is even '+n);
// }

// 2- Number is divisible by 2,3 or 6

// let num=11;
// num1=6;
// num2=3;
// num3=2;
// if(num%num1===0){
// console.log('Number is divide by 6');
// }
//      else if (num%num2===0){
//                   console.log('Number is divided by 3');
// }
//      else if(num%num3===0){
//                    console.log('Number is divided by 2');
//     }
// else {
//     console.log('Num is not divided by 2 or 3');
// }
// Pattern JKJKJK if n=6
// let n=6;
// let str='';
// let str1='J';
// let str2='K';
// for(let i=1;i<=n;i++){
//     if(i%2===1){
//         str=str+str1;
//     }
//     else {
//         str =str+str2;
//     }
// }
// console.log(str);
//  Number is positive or not

// let n=5;
// if(n>0){
//     console.log('positive Number ');
// }
// else {
//     console.log('Number is not positive');
// }

// 3- number is a mutiple of 10
// let multiple=1;
// let num=10;
// if(multiple%num===0){

// console.log('Multiple of '+num);
// }
// else{
//     console.log('Not a Multiple of '+num);
// }
// 4- Which number is greater m or n

// let m=6; let n=8;
// if(m===n){
//     console.log(m+' is equal to '+n);
//  }

// else if(m>n){
//     console.log(m+' is greater than '+n);
// }

     
//      else{
//     console.log(m+' is smaller than '+n);
// }

// 5- which number can divide n from 2 to 5 show those numbers

// let num=22;
// maxNumber=5;
// for(let i=2;i<=maxNumber;i++){
//     if(num%i===0){
//         console.log(i+' Yes');
//     }
//     else{
//         console.log(i+' No');
//     }
// }

// 6- number is divisible by 5 if yes the print hello
// let maxNumber=15;
// divisibleBY=5;
// for(let i=1;i<=maxNumber;i++){
//     if(i%divisibleBY===0){
//         console.log(i+' Hello');
//     }
// }

// 7- if number is even then print Even with number otherwise Odd with number

// let n=1;

// for(let i=1; i<=n;i++){
//     if(i%2===0){
//         console.log(i+':Even');
//     }
//     else{
//         console.log(i+ ':Odd')
//     }
// }
// 8- Display all the numbers that divides n
// let n=1;
// for(let i=1; i<=n;i++){
//     if(n%i===0){
//         console.log(i);
//     }
// }
// 9- print number and there square
// let n=5;
// let str='';
// for(let i=1;i<=5;i++){
// let square=i*i;
// if(i%2===0){ 
// str='Even';

// }
// else{
//     str='Odd';
// }
// console.log('Square of '+i+' ='+ square+': '+ str);
// }
// 10- Print Good if n>=75, print Average if 50<=n<75 and else poor
// let n =50;
// if(n>=75){
//     console.log('Good');
// }
// else if(50<=n && n<75){
//     console.log('Average');
// }
// else {
//     console.log('Poor');
// }

// 11- Grade A for 90<=n<100, Grade B for 75<=n<90 and Grade C for 50<=n<75 else Grade D 
// let n =96;
// if(90<=n && n<100){
//     console.log('Grade A');
// }
// else if(75<=n && n<90){
//     console.log('Grade B');
// }
// else if(50<=n && n<75){
//     console.log('Grade C');
// }
// else {
//     console.log('Garde D');
// }
// n=4 X, XY, XYX, XYXY

// let n=1;
// let str='';
// for(let i=1; i<=n;i++){
//     if(i%2===1){
//         str= str+'X'
//     }
//     else{
//         str=str+'Y';
//     }
//     console.log(str);
// }
// 12- n=4 then ABCA
// 
// let n=2;
// let a=1;
// let b=2;
// let c=3;
// let str='';
// for(let i=1;i<=n;i++){

//     if(i===a){
//         str=str+'A';
//         a=a+3;
//     }
// else if (i===b){
//     str=str+'B';
//     b=b+3;
// }
// else if(i===c){
//     str= str+'C';
//     c=c+3
// }

// }
// console.log(str);
// 13- when n=4 then o/p P1Q2R3
  
// let n=1;
// let a=1;
// let b=2;
// let c=3;
// let str='';
// for(let i=1;i<=n;i++){

//     if(i===a){
//         str=str+'P'+i;
//         a=a+3;
//     }
// else if (i===b){
//     str=str+'Q'+i;
//     b=b+3;
// }
// else if(i===c){
//     str= str+'R'+i;
//     c=c+3
// }

// }
//     console.log(str);
// when n=4 then print 1#3#

// let n=1;
// let str='';
// for(let i=1;i<=n;i++){
//     if(i%2===1){
//         str=str+i;
//     }
//     else{
//         str=str+'#';
//     }
// }
// console.log(str);
// when n=4 then print -1+2-3+4

// let n=7
// let str='';
// let Total=0;
// let neg=0;
// let pos=0;
// for(let i=1;i<=n;i++){
//     if(i%2===1){
//         str=str+'-'+i;
//         neg=-i;
//         Total=Total+neg;
//     }
    
//     else{
//         str=str+'+'+i;
//          pos=i;
//          Total=Total+pos;
//     }
//     console.log(str+'='+Total);

// }
// Print those number who divides n from 1 to n and who doesn't

// let n=2;
// let str='';
// let str1='';
// for(let i=1;i<=n;i++){
// if(n%i===0){
//     str=str+i+'#';

// }
// else{
// str1=str1+i+'#';
// }
// }
// console.log('Divide: '+str);
// console.log('Not Divide: '+str1);

// n=1234 then output =10

// let n= 1234;
// let sum=0;
// for(let i=0;i<=4;i++){

//     let lastDigit=n%10;
//     sum=sum+lastDigit;
//     let newDigit=(n-lastDigit)/10
//     n=newDigit;
    
// }
//   console.log(sum);