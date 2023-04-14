// 1- Print lenght of string and all char of it
// let str='Javascript';
// let len=str.length;
// console.log("The length is "+ len);
// for(let i=0; i<len;i++){

//     console.log(str[i]);
// }

// Substring

// let str='0123456';
// let len= str.length;
// console.log('Lenght of string is '+len);

// console.log(str.substring(0,4));
// console.log(str.substring(4,7));
// console.log(str.substring(7));

// IndexOf

// let str= 'HiHelloHiHi';
// let len= str.length;
// console.log('Length of the string is '+len);

// let index1=str.indexOf('Hi');
// let index2=str.indexOf('Hi',index1+1);
// let index3=str.indexOf('Hi',index2+1);
// console.log(index1);
// console.log(index2);
// console.log(index3);

// FInd out which one is Alphabet, digit and others
// let str ='A#1b@2c++3';
// let len =str.length;
// console.log(len);
// for(let i=0;i<len;i++){
//     let ch=str[i];
//     if(ch>='a'&& ch<='z')
//     {
//         console.log(ch+' is Alphabet');
//     }
//     else if (ch>='A'&&ch<='Z'){
//         console.log(ch+' is Alphabet');
//     }
//     else if(ch>='1'&& ch<='9'){
//         console.log(ch+' is Number');
//     }
//     else {
//         console.log(ch+' is others');
//     }
// }
// Covert the given into lower and Upper case
// let str ='Chrome-V8';
// let upperStr=str.toUpperCase();
// console.log(upperStr);

// let lowerStr=str.toLowerCase();
// console.log(lowerStr);
 
// Given a string, count the number of z in it.
// let count=0;
// let str='Hello';
// let len= str.length;
// for(let i=0;i<len;i++){
//     if(str[i]=='z'|| str[i]=='Z'){
//         count++;
//     } 
// }console.log('Number of z or Z in the string are ',count);

// Given a string, create a new string in which each char has been doubled.
// let str='12';
// let newStr='';
// let len= str.length;

// for(let i=0;i<len;i++){
// newStr=newStr+str[i]+str[i];

// } console.log(newStr);

// Given a string, create 3 strings with the alphabets, ditits and others char
// let str='2*a+3-c+d';
// let alphaStr='';
// let numStr='';
// let otherStr='';

// let len=str.length;
// for(let i=0; i<len;i++){
//     if(str[i]>='a'&& str[i]<='z'){
//         alphaStr=alphaStr+str[i];
//     }
//     else if(str[i]>='A'&& str[i]<='Z'){
//         alphaStr=alphaStr+str[i];
//     }

//     else if(str[i]>='1' && str[i]<='9'){
//     numStr=numStr+str[i];
//     }
//     else{
//         otherStr=otherStr+str[i];
//     }
// }
// console.log(alphaStr+otherStr+numStr);

// Given a sting, create a new string where multiple # have been removed.
// let str='a##b#c##';
// let newStr='';
// let len=str.length;
// for(let i=0;i<len;i++){
//     if(str[i]=='#'){
//         if((str[i+1])=='#'){

//         }
//        else{
//         newStr=newStr+str[i];
//        }    
//     }
//     else{  newStr=newStr+str[i];
// }
// }console.log(newStr);

// Given the two strings, find the number of times the second string appears in the first string.
// let str='YesNoYesOkYes';
// let str2='Yes';
// let count=0;
// let startPos=0;
// for(;;){
// let index=str.indexOf(str2, startPos );
// if(index>=0){
//     count++;
//     startPos=index+1;
// }
// else{
//     break;
// }
// }

// console.log(count);

// Given a sentence in which words are separated by space, find and print all the words in the sentence.
 
// let str= 'He';
// let str1=' ';
// let startPos=0;


// for(;;){
//     let index= str.indexOf(str1,startPos);
//     if(index>=0){
//         let word =str.substring(startPos,index)
//         console.log(word);
//         startPos=index+1;
//     }
//     else{
//         let word= str.substring(startPos)
//         console.log(word);
//          break;
//     }
    

// --------------------------------------------------------------------------
// P2-
// let str='123456789';
// let len =str.length;
// if(len>=5){
//     console.log("Long");

// }
// else{
//     console.log('Short');
// }

// P3
// let str='moo zoom';
//  let countx=0;
//  let len=str.length;
//  for(let i=0;i<len;i++){
//     if(str[i]=='m'){
//         countx++;
//     }
//     else {
//     }
//  }console.log('x= ',countx);
 

//  P4
// let str='12789';
//  let countx=0;
//  let county=0;
//  let len=str.length;
//  for(let i=0;i<len;i++){
//     if(str[i]=='x'){
//         countx++;
//     }
//     else if(str[i]=='y'){
// county++;
//     }
//  }console.log('x= ',countx);
//  console.log('y= ',county);

// P5
// // let str ='abca' ---------------------------------
// let str='caegahBannb'
// let startPos=0;
// let len=str.length;
// for(let i=0;i<len;i++){
// let index=str.indexOf('a',startPos);
// console.log('a at index:',index);

// startPos=index+i;
// }

// let index1= str.indexOf('b');
// console.log('b at index:',index1);
// let index3=str.indexOf('a',index+1);
// console.log('a at index:',index3);

// // p6

// let str ='123456789';
// let ch=str[0];
// let word;
// let len= str.length;
// for(let i=0;i<len;i++){
//     if(ch==str[i]){
//         word=str.substring(1);
//     }
// }console.log(word);

// P7
// let str='az+bz=4';
// let newstr='';
// let len =str.length;
// for(let i=0;i<len;i++){
//     if(str[i]=='z'){
                
//         newstr=newstr+'x';
//     }
//     else{
     
//        newstr=newstr+str[i];
//     }
// }console.log(newstr);

// P8
// let str='Hello123'
// let newstr='';
// let len=str.length;
// for(let i=0;i<len;i++){
//     if(str[i]=='m'){
        
//     }
//     else{
//         newstr=newstr+str[i];
//     }
// }console.log(newstr);

// P9
// let str='01234';
// let newStr='';
// let len=str.length;
// for(let i=0;i<len;i++){
//     if(i%2==0){
//         newStr=newStr+str[i]; 
//     }
//     else{
        
//     }
// }console.log(newStr);

// p10

// let str='qw23BN**45g';

// let len =str.length;
// let newStr='';
// for(let i=0;i<len;i++){
//     if(str[i]>='0' && str[i]<='9'){
//         newStr=newStr+str[i];
//     }
//     else{
       
//     }
// }console.log(newStr);

// P11
// let str='qwNN*%bT'
// let newstr='';
// let len=str.length;
// for(let i=0;i<len;i++){
//     if(str[i]>='a'&& str[i]<='z'){
//         newstr=newstr+'a';
//     }
//     else if (str[i]>='A'&&str[i]<='Z'){
//         newstr=newstr+'A';
//     }
//     else if (str[i]>='0'&&str[i]<='9'){
//         newstr=newstr+'0'
//     }
//     else {
//         newstr=newstr+str[i];
//     }
// }console.log(newstr);

// P12
// let str ='qw2B**5g';
// let len= str.length;
// let newStr='';
// for(let i=0;i<len;i++){
//     if(str[i]>='a'&&str[i]<='z'){
// newStr=newStr+str[i]+str[i];
//     }
//     else if(str[i]>='A'&& str[i]<='Z'){
//         newStr=newStr+str[i]+str[i]; 
//     }
//     else if(str[i]>='0'&& str[i]<='9'){
//         newStr=newStr+str[i]+str[i]+str[i];
//     }
//     else{
        
//     }
// }console.log(newStr);

// P13
// let str ='qwNN*%bT'
// let len=str.length;
// let newStr='';
// let lowerStr='';
// let upperStr='';
// let numberStr='';
// for(let i=0;i<len;i++){
//     if(str[i]>='a'&&str[i]<='z'){
//         lowerStr=lowerStr+str[i];
//     }
//     else if (str[i]>='A'&&str[i]<='Z'){
//         upperStr=upperStr+str[i];

// }
// else if(str[i]>='0'&& str[i]<='9'){
// numberStr=numberStr+str[i];
// } 

// }
// newStr=lowerStr+numberStr+upperStr;
// console.log(newStr);

//P14

// let str ='qwNN*%bT';
// let len= str.length;
// let newStr='';
// for(let i=0;i<len;i++){
//     if(str[i]>='a'&&str[i]<='z'){

//     }
//     else if(str[i]>='A'&& str[i]<='Z'){
     
//     }
//     else if(str[i]>='0'&& str[i]<='9'){
       
//     }
//     else{
//         newStr=newStr+str[i];
//     }
// }console.log(newStr);

// P15

// let str='ABCDABCD';
// let len= str.length;
// let newStr=str.substring(0,(len/2));
// console.log(newStr);

// P16

// let str='ab';
// let len= str.length;
// let newStr=str.substring((len/2));
// console.log(newStr);

// // P17------------------------------------------------------------Not solved-------------
// let str='EDUFECT';
// let len=str.length;
// let newStr1=''
// let newStr2='';
// let oddStr='';
// if(len%2!==0){
// let odd=((len/2)-0.5);
//  oddStr=str.substring(odd,(odd+1));
// }
// newStr1=str.substring(0,(len/2))
// console.log(newStr1);
// newStr2=str.substring((len/2));
// console.log(newStr2);
// let finalStr=newStr2+oddStr+newStr1;
// console.log(finalStr);

// P18

// let str='ABCDEABCDF';
// let len= str.length;
// let newStr1='';
// let newStr2='';
// newStr1=str.substring(0,(len/2));


// newStr2=str.substring((len/2)); 

// if(newStr1==newStr2){
//     console.log('Yes');
// }

// else{
//     console.log('No');
// }


// P19--------------------------------------------Check this for P17

// let str='123456789';

// let len=str.length;
// let newStr1=str.substring((len/2),(len/2)+1)
// console.log('Middle Char =',newStr1);
// let index=str.indexOf(newStr1,0);
// console.log('Index = ',index);

// P20----------------------------------------------------------Moving to next chapter due to time limit

// let str1='james';
// let str2='James Bond';
// let newStr2= str2.toLowerCase()
// if(str1==newStr2){
//     console.log('Same');
// }
// else{
//     console.log('Different');
// }