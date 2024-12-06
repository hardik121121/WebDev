//Arrays in JS:-(Collection of items):

//Create Arrays:

let heroes = ["ironman", "hulk", "thor", "batman", "antman"];

let marks = [96, 75, 48, 83, 66];
console.log(marks);

let info = ["rahul", 86, "Delhi"];

//Arrays can have different dtype value in JS but usually it is preffered to keep same dtype value in an array

//To print array length:
console.log(marks.length);

console.log(heroes);

//Note : Array is a special type of object which has index : value pair

//Array Indices:- (Values stored in linear fashion)

//arr[0], arr[1], arr[2]......

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

//If we try to print index that doesn't exist we get :-  undefined
console.log(marks[6]); //-undefined 

//Arrays are mutable but not strings :- 
//eg:-let marks = [96, 75, 48, 83, 66];
marks[0] = 66;
console.log(marks); //[66, 75, 48, 83, 66];

//Looping over an array:-
heroes = ["ironman", "hulk", "thor", "batman", "antman", "Black-Panther"];

//for loop: length(property)
for(let index = 0; index < heroes.length; index++){
    console.log(heroes[index]);
}

//Prefferred - for-of loop:-

for(let elements of heroes){
    console.log(elements);
}

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

for(let city in cities){
    console.log(city);
}

//Practice Q1. For a given marks with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of entire class:

let students1 = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i of students1){
    sum = sum + i; 
}
let average = sum/students1.length;
console.log(`avg marks of the class = ${average}`);

//For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying call

let prices = [250, 645, 300, 900, 50];

let index = 0;
for(let price of prices){
    let offer = price / 10;
    prices[index] = prices[index] - offer;
   index++;
}
console.log(`price after discount is ${prices}`);
//Note - For-Of loop cannot be used here because it accesses value not index directly
//So it can be done by indirect usage:

//Alternative way of solving above question by using for loop:
for(let i = 0; i < prices.length; i++){
   let  offer1 = prices[i] / 10;
   prices[i] -= offer1;  
}
console.log(prices);

//Array Methods:

let veggies = ["potatao", "onion", "tomato", "cauliflower", "brinjal"];

//1. Push() - add to end

veggies.push("Brinjal");

//makes changes in original array

//can also be used to add multiple items together

veggies.push("bottleguard", "carrot", "raddish");

console.log(veggies);

//2. Pop() - delete from end & return
let DeletedValue = veggies.pop();
//makes changes in original array

console.log(veggies);

//we can also printed value deleted by pop
console.log(DeletedValue);


//3. toString() - converts array to String
console.log(veggies.toString());
//original array remains untouched

//4. concat() - joins multiple arrays & returns the result

let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["batman", "superman", "aquaman"];

let allHeroes = marvelHeroes.concat(dcHeroes);

console.log(allHeroes);
// do's work in new array without changing actual array

//5.unshift() - add element to start 

marvelHeroes.unshift("BlackWidow");
console.log(marvelHeroes);

//6. shift() - remove element start

let val = marvelHeroes.shift();

console.log("deleted", val);

//changes are performed in original array

//7. slice() - returns a piece of the array

//ending index is non-inclusive

console.log(allHeroes.slice(1,3));

// no changes are performed in original array

//8. splice() - change original array(add, remove replace)

//Here changes are performed in original array

//Syntax:- splice(startidx, delCount, newE(1...))
let numbers = [1,2,3,4,5,6,7];

//splice(2,2,101,102)

// after this final array will look like:- 

//[1,2,101,102,5,6,7]

//splicing 2 se chaalu krni h or ek element delete krna h and konse new elements add krne h usi index pe jisse deleting ki h) 

numbers.splice(2,2,101,102);

console.log(numbers);
//output:- [1,2,101,102,5,6,7]

//Suppose if we don't want to delete but only add elemets:
numbers.splice(2,0,105);
console.log(numbers);

//Suppose we only want to delete a element:
numbers.splice(3,1);
console.log(numbers); //101 will be deleted

//Suppose if we only want to replace a element:
numbers.splice(3,1,105);
console.log(numbers);

//If we only pass a single value it acts like slice : meaning it will return only the elements present in that array after that passed index
numbers.splice(4); // meaning 4 waale index se aage ke saare elements delete krdo
console.log(numbers);

//If we dont pass any index , no element is deleted:
numbers.splice();
console.log(numbers);

// Practice Q1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a. Remove the first company from the array
//b. Remove Uber & add ola in its place
//c. add amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log("removed company = ", companies.shift());
console.log(companies); // ["Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.splice(1,1,"Ola");
console.log(companies); // ["Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.push("Amazon");
console.log(companies); // ["Microsoft", "Uber", "Google", "IBM", "Netflix", "Amazon"]