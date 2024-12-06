// Functions in JS:- (Block of code that performs a specific task , can be invoked whenever needed)
//eg:- .log(), .toUpperCase(), .push()

//Fuction Definition:-

// function functionName(){
     // do some work
// }

//  function functionName(param1, param2...){
     //do some work
//  }

//Function Call:-

//functionName();

function myFunction(){
     console.log("Welcome to my learnings");
     console.log("I am learning JS");
}
myFunction();

//Use of functions - To prevent redundancy from code

//variable in function definition is perimeter
function myfunction1(msg){ //parameter->input
     console.log(msg);
}
myfunction1("I love web-d");
//arguement is the message or variable passed during a function call

//we can also pass multiple variables:
function myfunction2(msg, val){
  console.log(msg,val);
}
myfunction2("I love web-dev", 100);

//Function to calculate sum of two numbers:

function mySum(val1, val2){
  console.log(val1 + val2);
}
mySum(5,6);

//return keyword can be used to return a value for future use:

function yourSum(val1, val2){
     //local variable - scope limited
     finalSum = val1 + val2;
     return finalSum;
}
let value = yourSum(3,4); // this will not print any value due to no console.log() statement but it can be stored in a variable and then be used
console.log(value);

//Arrow functions =>(Cpmpact way of writting functions):

// const functionName = (param1, param2...) => {
//      //do some work
// }

//sum arrow function
const sum = (a, b) => {
     console.log(a+b);
}
sum(4,4);

//multiplication arrow function
const mul = (a,b) => {
     console.log(a*b);
}
mul(4,4);

//without parameter arrow function:
const printHello = () => {
     console.log("hello");
}
printHello();

// Q1. Create a function using the "function" keyword that takes a String as an arguement & returns the numbwr of vowels in the string:

function findVowel(message){
     let count = 0;
     for(let val of message){
          if(val == "A" || val == "E"|| val == "I" || val == "O" || val == "U" || val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
              count++;
          }
     }
     return count;
}
console.log(findVowel("aEIou")); //5

//Create an arrow function for the same:

const vowel = (message) => {
     let count = 0;
     for(let val of message){
          if(val == "A" || val == "E"|| val == "I" || val == "O" || val == "U" || val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
               count++;
          }     
     }
     return count;
}
console.log(vowel("AIEOUUUU")); //8

//forEach Loop in Arrays: (method)

//arr.forEach(callBackFunction)

//callBackFunction : Here it is a function to execute for each element in array

//A callback is a function passed as an arguement to another function

// vowel.forEach ((Val) => {
// console.log(val);
// })

//eg:-


let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){ //arr me se ek-ek krkr value nikalega or use printVal me pass karayega
console.log(val);
}) //1,2,3,4,5


let cities = ["pune","delhi","agra"];
cities.forEach(function printCity(city){
     console.log(city.toUpperCase());
}) // pune, delhi, agra

//to print value with index:

cities.forEach(function printNameAndVal(city, index){
 console.log(city, index);
})

//Note : ForEach method can only be used for arrays and not for strings

//What are higher order functions/methods ?

//They are those functions which use a different function as a parameter or returning function as a value
//eg: function with callback functions

//Practice Q1. For a given array of numbers, print the square of eachvalue using forEach Loop

let numbers4 = [4,5,6,7];

let calculateSquare = numbers4.forEach((values) => {
     console.log(values*values);
});
// numbers4.forEach(calculateSquare);

//Some more important Array Methods:

//1. Map - Creates a new array with the results of some operation. The value its callback returns are used to form a new array
//Similar to forEach but returns a new array

// arr.map(callbackFnx(value,index,array))

// eg:- let newArr = arr.map((val) => {
//     return val*2;
//})

//using map to print array elements:-

let nums = [65,42,54,34,23];

let newArr = nums.map((val) => { 
 return val;     
})
console.log(newArr);

//2. Filter - Creates a new array of elements that give true for a condition/filter - Array ke har index pe jaake condition ke hisaab se elements ko filter out krna
//eg: all even elements

//Syntax:- let newArr = arr.filter((val){
// return val % 2 == 0;
//})

//Create a number array and filter even numbers:

let latestArr = [2,4,3,5,6,8,7,9];

let ansArr = latestArr.filter((val) => {
     return val % 2 == 0;
})
console.log(ansArr);

//3. Reduce - Performs some operations & reduces the array to a single value. It returns that single value.

//DemoCode:- const array1 = [1,2,3,4];
             
             // 0+1+2+3+4
            // const initialValue = 0;
            // const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
            // console.log(sumWithInitial);
            //Expected output : 10
let arr4 = [1,2,3,4];
const answer1 = arr4.reduce((result1,currentVal) => {
     return result1 + currentVal;
})
console.log(answer1);

//return greatest element everytime:

const answer2 = arr4.reduce((currentVal,result1) =>{
     return Math.max(result1,currentVal);
})
console.log(answer2);

//Practice Q1. Given an array of students filter out marks of students that scored greater than 90;

let marks1 = [94,46,87,95,62,77,98,56,91,60];

let answerArr = marks1.filter((value) => {
    return value > 90;
})
console.log(answerArr);

//Practice Q2. Take a number n as an input from the user. Create an array
//of numbers from 1 to n. Use the reduce method to calculate sum of all numbers
//in an array. Use the reduce method to calculate product of all
//numbers in the array:

const n = prompt("Enter a number");

let arraay = [];
for(let i = 1; i <= n; i++){
     arraay[i-1] = i;
}
let answer3 = arraay.reduce((Prebval,currentValue) => {
     return Prebval + currentValue;
})
console.log(answer3);

let answer4 = arraay.reduce((Prebval,currentValue) => {
     return Prebval * currentValue;
})
console.log(answer4);
