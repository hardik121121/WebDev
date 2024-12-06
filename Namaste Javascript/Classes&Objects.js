//Object :

// A javascript object is an entity having state behavior(properties and method).
const student = {
    fullName : "Hardik Arora",
    marks : 94.4,
    printMarks : function(){
        console.log("marks=",this.marks); //student.marks
    }

}

//Prototypes in JS:

//JS objects have a special property called prototyype
student.toString();

//Prototype example:

let arr= ["apple","mango","water-melon"];
typeof arr; //object
arr.push("litchi");//4
arr;
["apple","mango","water-melon","litchi"];


//How to make our own prototype:

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
    calcTax2 : function () {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
   salary :  50000,  
   calcTax() {
    console.log("Tax rate is 20%")
   }
}
//We can set prototype using __proto__
//to set a prototype - kisi or object ke functions kisi or object me call krna
karanArjun.__proto__ = employee;

//Note : If object & prototype have same method, object's method will be used

//Classes in JS : 

//Class is a program code-template for creating objects