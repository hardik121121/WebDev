console.log("Hello Javascript");

Full_name = "Tony Stark";
console.log(Full_name);

age = 24;
console.log(age);

price = 99.99;
console.log(price);

x = null;
console.log(x);

y = undefined;
console.log(y);

is_Follow = false;
console.log(is_Follow);

Full_name = 25;
console.log(Full_name);

let Full_name = "Tony Stark";
let age = 25;
let totalPrice = 1000;

console.log(Full_name);

const GENDER = "male";
console.log(GENDER);

let a;
console.log(a);

// const b;
// console.log(b);
// error dega

{
    a = 5;
    console.log(a);
    // a cannot be redeclared here again in this block ; i have to use a new block
}
{
    a = 10;
    console.log(a);
}

let age1 = 24;
//number datatype

typeof (age1);

let fullName = "Tony Stark";
//string dataype

let isFollow = true;
//Boolean defined

let v;
//undefined

let m = null;
//null 
//Note type of null is object but considered primitive

let u = BigInt("124");
//BigInt

let i = Symbol("Hello");
//Symbol

const student = {
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
};
//Object

console.log(student["fullName"]);
//To access single key

console.log(student.age);
//To access single key

// To assign new value to objects
student["age"] = student["age"] + 1;

console.log(student["age"]);
//New age will be printed now

student["fullName"] = "Rahul Sharma";


// Practice Q1. Create a const object called "product" to store information shown in picture

//Solution:-
  const PEN = {
              penName : "Parker Jotter Standard",
              type : "Ball Pen",
              color : "Black",
              rating : "4 star by 7002 people",
              comesIn : "Deal of the day",
              currentPrice : "$270",
              mrp : "$285",
              discountPercentage : 5
           };

console.log(PEN);

// Practice Q2.  Create a const object called "profile" to store information shown in picture:-

//Solution:-
   const PROFILE = {
              userName : "@shradhakhapra",
              posts : 195,
              followers : "569k",
              following : 4,
              isFollow : true,
              name : "Shradha Khapra",
              threads : "@shradhakhapra",
              occupation : "Entrepreneur",
              companyName : "Apna College",
              exCompany : "Ex-Microsoft,DRDO",
              oneLiner : "To educate someone is the highest privilege"
           };

