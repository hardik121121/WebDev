// DOM (Document Object Model):

//Three musketeers of Web Dev:

//1. HTML(Hyper text Markup Language) - structure
//2. HTML(Cascading Style Sheets) - styling
//3. Javascript - logic

// Starter Code:

//1. link - used to link css file
//2. script - used to link js file

// Pro's of using external js file:

//1. Increases readability
//2. Promotes modularity
//3. helps in browser caching


// Window Object:

//The window object represents an open window in a browser. It is browser's object (not Javascript's) & is automatically created by the browser

//It is a global object with lots of properties and methods

//console.log() , alert, prompt are a part of window object

console.log("hello");
window.console.log("hello2");

// What is DOM? - Tree like structure where every node is an object

// Basically all htmml code written in linking with js file,the html elements can be accessed throughout the JS file, wether its paragraph tag, heading tag,
// div tag or img tag;etc The html code or elemnts automatically come in JS file and convert themself in an object and it is called "Document" and it gets available
// in window object as a sub-object.

// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
console.log(window.document); //prints all html code in js
console.log(window.document.body.childNodes[1]);

//Now to see properties of a document:
console.dir(window.document); // - to print object

// window --> html--> head --> meta, meta, title, link
            //    \
            //     \
            //      > body --> div --> Image, h1, p, div
            //         \
            //          \
            //           > script

// Dom is used to perform dynamic changes(according to user input) in html by JS.
document.body.style.background = "pink";
//console.log(window.document.body.childNodes[1].innerText = "abcd");

// Dom Manipulation:-
 
//To access Elements:

//1. Selecting with ID: document.getElementbyId("myId");
let heading = document.getElementById("heading"); //returns a value  that can be saved in a variable
console.dir(heading); //id # is unique for each element

heading = document.getElementById("myId"); 
console.dir(heading);
// Note: For non-exsisting id it returns null

//2. Selecting with Class: document.getElementsByClassName("my Class")
let header = document.getElementsByClassName("header");
console.dir(header); //class . itself can be same for multiple elements
//returns HTML collection

header = document.getElementById("myClass"); 
console.dir(header);
// Note: For non-exsisting class it will return an empty HTML Collection

//Note : Css priority of id is greater than class

//3. Selecting with tags : docyment.getElementByTagNane("p")
let paras = document.getElementsByTagName("p");
console.dir(paras);

//4. Query Selector : document.querySelector("myId/myClass/tag") || document.querySelectorAll("myId/myClass/tag")
let firstElement = document.querySelector("p"); //returns 1st  matching Element
console.dir(firstElement);

let allElements = document.querySelectorAll("p"); //returns all matching elements
console.dir(allElements);

firstElement = document.querySelector("#heading"); //returns 1st  matching Element
console.dir(firstElement);

allElements = document.querySelectorAll("#heading"); //returns all matching elements
console.dir(allElements);

firstElement = document.querySelector(".header"); //returns 1st  matching Element
console.dir(firstElement);

allElements = document.querySelectorAll(".header"); //returns all matching elements
console.dir(allElements);
//Note : Query Selector returns a Node List.

//Note : For non-exsisting id it returns null and for non-exsistiing class it returns an empty Node List or HTML Collection

// Properties used in navigation:

//1. firstChild
//2. lastChild
//3. Children

//Properties to check element value(get) and can also change element value(set):

//1. tagName - returns tag of the first element Node
console.dir(firstElement.tagName); //h1

//2. innerText - returns the text context only of the element and all its children
let div = document.querySelector("div");
console.dir(div.innerText);

// to set the value:
// div.innerText = "abcd";

//3. innerHTML - returns the plain text as well as HTML contents in the element
console.dir(div.innerHTML); 

// to set the value:
//div.innerHTML = "<div> inner div </div> ";

//practical example:
let heading1 = document.querySelector("h1");
heading1.innerText = "new-Heading";
console.dir(heading1);

heading1.innerHTML = "<i>Latest-Heading</i>"; 
//pro's of innerHTML - can use tags in it
console.dir(heading1);

//4. textContent - returns textual content even for hidden elements
let h4 = document.querySelector("h4");
console.dir(h4.textContent);

//Practice Q1. Create a H2 heading element with text - "Hello Javascript". Append "from Apna College Students" to this text using JS

let t1 = document.querySelector("h2");
t1.innerText = t1.innerText +  "from Apnna College Students";
console.dir(t1);

//Practic Q2. Create 3 divs with common class name - "box". Access them & add some unique text to each of them 
let divs = document.querySelectorAll(".box");
let index = 1;
for(div of divs){
    div.innerText = `new unique value ${index}`;
    index++;
}
console.dir(divs);


// Attributes in DOM Manipulation:

//1. getAttribute(attr) // to get the attribute value:

let div1 = document.querySelector("div");
console.log(div1);

let id = div1.getAttribute("id");
console.log(id);

let name = div1.getAttribute("name");
console.log(name);

let paragraphs = document.querySelector("p");
console.log(paragraphs.getAttribute("class"));

//2. setAttribute(attr, value) // to set the attribute val th
console.log(paragraphs.setAttribute("class","my-Paragraphs")) //elements me jaake check kro

//3. Style - to channge style value of an element
let div2 = document.querySelector("div");
console.log(div2.style);

div2.style.backgroundColor = "green"; // use camel casing in js
div2.style.backgroundColor = "purple";

div2.style.fontSize = "26px";
div2.innerText = "Changed by js styling";

//Attributes to add new Elements:

// Insert Elements:(add)

//1. node.append(el) # adds at the end of the node(inside)

// first create = let el = document.createElement("div");
// then add = div.append(newBtn); 
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

div2 = document.querySelector("div");
div2.append(newBtn); 

//2. node.prepend(el) #adds at the start of node (inside)

div2.prepend(newBtn);

//3. node.before(el) #adds before the node(outside)

div2.before(newBtn);

//4. node.after(el) # adds after the node(outside)

div2.after(newBtn);

//Attributes to delete created Elements:
let newHeading = document.createElement("h1");
newHeading.innerText = "Hi this is a heading";
console.log(newHeading);
document.querySelector("body").prepend(newHeading);
newHeading.before(h4);

// Deleting Elements:(add)

//1. node.remove()
newHeading = document.querySelector("h1");
newHeading.remove();

//Some more methods : appendChild(); removeChild();

//Practice Q1. Create a new button element. Give it a text "click me", background color of read & text color of white
//Insert the element as the first element inside the body tag

let firstBtn = document.createElement("btn");
firstBtn.innerText = "Click me!";
firstBtn.style.height = "26px";
firstBtn.style.width = "26px";
firstBtn.style.border = " 1px solid black";
firstBtn.style.backgroundColor = "red";
firstBtn.style.color = "white";
document.querySelector("body").prepend(firstBtn);

//Practice Q2. Create a <p> tag in html, give it a class & some styling
//Now create a new class in CSS and try to append this class to the <p> element

//Did you notice how you overwrite the class name when you add a new one?
//Solve this problem using class list

let paragraph2 = document.createElement("p");
paragraph2.innerText = "new Paragraph";
paragraph2.style.fontSize ="25px";
paragraph2.style.fontFamily = "Poppins sans-serif";
paragraph2.style.color = "white";
paragraph2.style.backgroundColor = "black";
document.querySelector("body").append(paragraph2);
paragraph2.classList.add("newClass");
paragraph2.classList.add("newClass1");
console.log(paragraph2.classList)
