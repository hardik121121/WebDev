//Events in JS:

//The change in the state of an object is known as an Event
//Events are fired to notify code of "interesting changes" that may affect code execution


//1. Mouse Events (click, double click etc);
//2. Keyboard Events (keypress , keyup , keydown)'
//3. Form Events (submit etc.)
//4. Print event & many more

//Write in html: (inline handling)

//1. <button onclick="console.log('button was clicked'); alert('hello')">Click me!</button> (command is follwed after clicking the button)

//(Note : if we are using double codes for strings outside then inside will have to be single codes) 

//2. <button ondblclick="console.log('button was clicked 2x');">Click me 2 times!</button> (command is follwed after double clicking the button)

//3. <div onmouseover="console.log('you are inside div')">this is a box</div>

//But  this is not a goow way of handling events by html code will become bulky

//Event Handling in JS: (JS handling) 

//Syntax:-

// Node.event = () =>{
//     //handle here
// }

let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log(" button was clicked");
//     let a = 25;
//     a++;
//     console.log(a); //26
// }; //comment kdia nhi to overwrite hojayega
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};
btn1.onclick = () => {
    console.log("HANDLER1");
    let a = 25;
    a++;
    console.log(a);
};
//ye overwride krdega to HANDLER2 print hone lega
btn1.onclick = () => {
 console.log("HANDLER2");
};

// drawback of JS handling : at a time in only one way we can handle events if we do that again over riding will be performed

//Property: JS handling > inline handling

// ##Event Object :

//It is a special object that has details about  the event

//All event handlers have access to the Event Object's properties and methods

//Syntax:-  node.event = (e) => {
//           //handle here 
//            }
// e.target , e.type, e.clientX, e.clientY

btn1.onclick = (e) => { //Here e is the event object
 console.log(e); //many values and properties of event object will be printed
  console.log(e.type); //click will be printed indicating thatit is a "onclick" type event.
  console.log(e.target); //gives html code for the provided event
  console.log(e.clientX, e.clientY); //gives the distance in x and y direction
} 
div = document.querySelector("div");
div.onmouseover = (e) => {
  console.log("you are inside hovering div");
  console.log(e); //many values and properties of event object will be printed
  console.log(e.type); //mouseover will be printed indicating thatit is a "mouseEvent" type event.
  console.log(e.target); //gives html code for the provided event
  console.log(e.clientX, e.clientY); //gives the distance in x and y direction
};

//## Event Listeners:

// Listens and waits for events and as soon as event comes they perform their respective function

// 1. to add Event Listener:

//node.addEventListener(event,callback);

btn1.addEventListener(onclick, () =>{
    console.log("button1 was clicked");
    console.log(e); //many values and properties of event object will be printed
  console.log(e.type); //mouseover will be printed indicating thatit is a "mouseEvent" type event.
  console.log(e.target); //gives html code for the provided event
  console.log(e.clientX, e.clientY); //gives the distance in x and y direction
});

btn1.addEventListener(onclick, () =>{
    console.log("button1 was clicked - handler2");
});

//----Event listers helps us to perform multiple tasks on same events.

// 2. to remove Event Listener:

//node.removeEventListener(event,callback);

btn1.addEventListener(onclick, () =>{
    console.log("button1 was clicked - handler1");
});btn1.addEventListener(onclick, () =>{
    console.log("button1 was clicked - handler2");
});btn1.addEventListener(onclick, () =>{
    console.log("button1 was clicked - handler3");
});btn1.addEventListener(onclick, () =>{
    console.log("button1 was clicked - handler4");
});

const handler3 = () => {
 console.log("button was clickefd - handler3");
};

btn1.removeEventListener("click", handler3);

// Note: the callback reference should be same to remove

//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again

let btn2 = document.querySelector("#btn2");
let mode = "Light";
btn2.addEventListener("click", () => {
  if(mode==="Light"){
    mode = "Dark";
    document.querySelector("body").style.backgroundColor = "black";
  }else{
    mode = "Light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(mode);
});