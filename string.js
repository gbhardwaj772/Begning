//1- no of z present in the string
// let count=0;
// let str= 'Hello';
// let len= str.length;
// for(let i=0;i<=len;i++){
// let ch=str[i];
// if(ch>='z'){
//     count++;
// }

// }console.log(count);

// 2- double each char in the string on console

// let str='12';
// let str1='';

// let len= str.length;
// for(let i=0; i<len;i++){

   
//     str1=str1+str[i]+str[i];
//  
// }
// console.log(str1);
// 3- saprate alphatbet numbers and special char from string

// let str='2*a+3-c+d'
// let len= str.length;
// let newstr='';
// let number='';
// let other='';
// for(let i=0;i<len;i++){
//     let ch=str[i];
// if(ch>='A'&& ch<='Z'){
//     newstr=newstr+ch;
// }
// else if(ch>='a'&& ch<='z'){
//     newstr=newstr+ch;
// }
// else if(ch>='0' && ch<='9'){
//     number=number+ch;
// }
// else  {
//     other=other+ch;
// }
 
// }
// ;
// console.log(newstr,other,number);

// 4- Remove extra # from the string

let str= 'Hello';
let newstr='';
let len= str.length;
for(let i=0; i<len;i++){
if(str[i]==='#'){
    if(str[i-1]==='#'){
// do nothing
    }
    else{
        newstr=newstr+str[i];
    }

    }
    else{
        newstr=newstr+str[i];
}


}console.log(newstr);
