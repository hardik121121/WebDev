// This is a single line comment 

/*This is a multi-line
   comment*/

console.log("hello world");
//This code prints hello world

/* This is code that prints hello world on our console window*/

//Arthimetic Oprators:- +,-,*,/,%,exponentiation,increment,decrement

let a = 5;
let b = 2;

console.log("a = ",a, "& b = ", b);  //5  //2
console.log("a + b"); // a + b
console.log("a + b = "); // a + b =
console.log("a + b = ", a + b); //7
console.log("a - b = ", a - b); //6
console.log("a * b = ", a * b);//10
console.log("a / b = ", a / b);//2.5
console.log("a % b = ", a % b);//1
console.log("a ** b = ", a ** b);//25

//single operand aritnmetic operator(unary):-

//increment and decrement

a = a + 1;
console.log("a = ",a);  //6

a = a - 1;
console.log("a = ",a);  //5

console.log("a++ = ",a++);  //5
console.log("++a = ",++a);  //7
console.log("a-- = ",a--);  //7
console.log("--a = ",--a);  //5

//Assignment Operators:- =, +=, -=, *=, %=, **=


let x = 7;
let y = 8;

//The value of right is assigned to left

x = y; // x = 8
console.log(x);

x += 4; // x = x + 4;
console.log("x += ", x); //12

x -= 4; // x = x - 4
console.log("x -= ", x); //8

x *= 2; // x = x * 2
console.log("x *= ", x);//16 

x %= 2; // x = x%2
console.log("x %= ", x); //0

y **= 3;
console.log("y **= ", y); //512


//Comparison operators in JS:- >, >=, <, <= (USed to Compare two values)

// == Equal to

// === Equal to & type

// != Not equal to

// !== Not equal to & type

let w = 6;
let o = 5;
let z = "6"; //string - > number

console.log("6 == 5",w==o); //false
console.log("6 != 5",w!=o); //true

console.log("w == z",w==z); //true
//Here string is automatically converted to number and then matched

// But in some cases we don't want that string be equally compared to number
//Therefore  we use striccter version of equal to or not equal to
// === OR !==(strict version - checks value as well as datatype)

console.log(" w === z =", w===z); //false
console.log(" w !== z =", w!==z); //true

console.log("w > o =",w>o);//true
console.log("w < o =",w<o);//false
console.log("w >= o =",w>=o);//true
console.log("w <= o =",w<=o);//false

//Logical Operators in JS:- (Used to evaluate multiple expressions together)

//Logical AND &&

//Logical OR ||

//Logical NOT !

//Note:- Logical operators always give ans in true or false 

//Logical AND:- (Gives true if both condition 1 and condition 2 are true)

let g = 6;
let f = 5;

let condition1 = g > f;//true
let condition2 = g === 6; //true
let condition3 = g === 5; //false
console.log("condition1 && condition2 =", condition1 && condition2); //true
console.log("condition1 && condition3 =", condition1 && condition3); //false

//Logical OR(Gives true if any one condition is true):

console.log("condition || condition =", g < f || g ===6); //true

//Logical NOT(Reverses the answer of given expression):

console.log("!(g<f)=", !(g<f)); //false => true

//Conditional Statemets (To implement some condition in the code):

//if statement example:

let  mode = "dark"
let color;
 if(mode === "dark"){
    color = "black";
   }
   if(mode === "light"){
      color = "white";
   }
console.log("color =", color);
 
let age = 25;
if(age >= 18){
   console.log("You can vote")
}
if(age < 18){
   console.log("You cannot vote")
}

//if-elese statement:

mode = "white";

if(mode === "dark"){
   color = "black";
  }
  else{
     color = "white";
  }
console.log("color =", color);

age = 16;

if(age >= 18){
   console.log("You can vote")
}
else{
   console.log("You cannot vote")
}

//Note: else cannot be written without if

//Example: Find if a given no. is odd or even

let number = 8;
let answer;

if(number%2==0){
   answer = "even";
}else {
   answer = "odd";
}

console.log("answer =", answer);

// else-if Statement:

if(age < 18){
   console.log("junior");
}else if(age > 60){
   console.log("senior");
}else{
   console.log("middle")
}

let mode2 = "dark";
let color2;

if(mode2 === "dark"){
   color2 = "black";
}else if(mode2 == "blue"){
   color2 = "blue";
}else if(mode2 === "pink"){
   color2 = "pink";
}else {
   color2 = "white";
}

console.log(color2);
if(mode2 === "dark"){
   console.log(mode2);
} 

//Ternary Operators in JS:-(Special Operator because it works on three operands):

//Sysntax:  condition? true output : false output

age = 25;
let result = age > 18 ? "adult" : "minor";
console.log(result);

age <= 18 ? console.log("adult") : console.log("not adult");

//Switch case for condition checking: eg:-

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// Practice Q1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.:-

// Solution:-  
  
 let number1 =  prompt("Enter a number:");
  if(number1%5===0){
   console.log(number1, "is a multiple of 5");
  }else {
   console.log(number1, "is not a multiple of 5");
  }

//   ## Practice Q2. Write a code which can give grades to students according to their scores:

//   Given:- 90-100 = A
//   Given:- 70-89 =  B
//   Given:- 60-69 =  C
//   Given:- 50-59 =  D
//   Given:- 0-49 =   F
 
//   Solution:-   
               const number3 = 64;
               if(number3>=90 && number3<=100){
                console.log("A grade");
               }else if(number3>= 70 && number3<=89){
                console.log("B grade");
               }else if(number3>= 60 && number3<=69){
                console.log("C grade");
               }else if(number3>= 50 && number3<=59){
                console.log("D grade");
               }else{
                console.log("F grade");
               }