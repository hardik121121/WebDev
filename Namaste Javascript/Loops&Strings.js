//Loops in JS:-

//1. for loop:-

for( let i =1; i <= 5; i++){
    console.log("Hardik");
}
console.log("loop has ended");

//Calculate sum of 1 to n:-
let sum  = 0;
let n = 50;
for(let i = 1; i <= n; i++){
   sum = sum + i;
}
console.log("sum of",n,"natural no.'s is = ", sum);

// (while loop):-

let j =1;
while(j<=5){
  console.log(j);
  j++;
}

//(do while loop):-(condition check at last = so code will run atleast once)
let k = 1;
do{
   console.log(k)
   k++;
}while(k<1);


//(For-off loop):-(help to iterate loops over some special datatypes like arrays and strings):-
let str = "Hardik"
 for(let i of str){
   console.log(i);
}

//To calculate length of string:-

let str1 = "JavaScript";
let length = 0;
for(let val in str1){
    length++;
}
console.log(length);

//(For-in loop):-(help to iterate loops over some special datatypes like objects and arrays):-
let student = {
    name : "Rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true
};

for (let key in student){
    console.log("key=",key, "value=", student[key]);
}

//Note :- For-in loop returns key of an object annd once we have key we can calculate values easily


//Practice Q1. Print all even no from 0 to 100:-

for(let i = 0; i <= 100; i++){
   if(i%2 === 0){
      console.log(i);
   }
}
//Practice Q2. Print all odd no from 0 to 100:-

for(let i = 0; i <= 100; i++){
   if(i%2 !== 0){
      console.log(i);
   }
}

// Practice Q3. Create a game where you start with any random game number. Ask the user  to keep guessing the game number until the user enters correct value:-


let numValue = 8;
let num = prompt("Enter a number between 1 to 10:");
while(num != numValue){
   num = prompt("OOp's your guess is wrong plz retry:");
}
prompt("Congratulations your guess is right :", num);
 
//Create String:- 

let str3 = "Apna College";
console.log(str3.length);

// To access indices
console.log(str3[0]);

//Template literals in JS:-(A way to have embeded expressions in strings):

//It is a special type of string create in the form of backticks

let sentence =  `This is a template literal`
console.log(typeof sentence)

//Why use backticks:-

//eg:-

let obj = {
   item : "pen",
   price : 10,
};

console.log("the cost of",obj.item, "is", obj.price, "rupees");

//Better way :_ (combine in a single string by template literal)

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// String interpolation in template literals:-
//To create strings by doing substitution of placeholders

// `string text ${expression} string text`

// Escape characters:-

//1. \n - next line in string

console.log("Apna\nCollege");

//2. \t - to give tab spaces in string

console.log("Apna\tCollege");

//String Methods in JS:-(These are built-in functions in js to manipulate a string):-

//1. str.to UpperCase();
let newStr = "Apna College hai"
newStr = newStr.toUpperCase();
console.log(newStr);

//2. str.toLowerCase();
newStr = newStr.toLowerCase();
console.log(newStr);

//3. str.trim() = removes whitespaces
newStr = newStr.trim();
console.log(newStr);

//4. str.slice() = returns part of string
newStr = newStr.slice(0,5);
console.log(newStr);

//5. str1.concat(str2);
newStr = newStr.concat(str);
console.log(newStr);
//or newStr = newStr + str; is also concatination

//6. str.replace(searchVal, newVal)
newStr = newStr.replace("apna", "uska");
console.log(newStr);

//7. str.charAt(index) 
newStr = newStr.charAt(3);
console.log(newStr);

//Note :- Strings are immutable in js

//  Practice Q1. Prompt the user to enter their full name . Generate a username for them based on the input.
//                 Start username with @, followed by their full name and ending with the full name length

//                 eg:- user name = "shradhakhapra", username should be "@shradhakhapra11"
            
// Solution:- 

let fullname = prompt("Enter your full name withot spaces");
console.log(fullname);
let username = "@" + fullname;
let length1 = fullname.length;
username = username + length1;
console.log(username);