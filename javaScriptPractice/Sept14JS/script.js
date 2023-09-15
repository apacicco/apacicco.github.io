//const add = (a, b) => a+b;//dont need curly braces if one lines

const add = (a, b) => {
    return a+b;
}


add(5,6);

console.log(add(5, 6));


const square = a => a*a;
console.log(square(5));

const hello = () => console.log("Hello me!");

hello();//called


const helloSpecific = (userName) => console.log("Hello " + userName);

helloSpecific("Al");


const helloFullName = (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName);
    console.log("Youre great");
};

helloFullName();

/*
const myName = "Al"
cannot change value
*/

const myFunc = () => console.log("hey you");
myFunc();

//for reusing =, use let keyword

window.onload = () => {
    const clickButton = document.getElementById("ani-button");
    //clickButton.onclick = changeText;//no parantheses = these execute the function immediately
    //can also do this: document.getElementById("button-click").onlclick = changeText
    //when the window is loaded, it will call the code in here
    document.getElementById("ani-button").onclick = moveButton;
    document.getElementById("button-show-name").onclick = displayName;
    
}

const moveButton = () => {
    document.getElementById("square").classList.add("animate");//grabs "square", adds the animate class to it
    document.getElementById("ani-button").classList.add("hide");//grabs "ani-button", adds the hide class to it
}


const displayName = () => {
    //get text out of text box
    const firstName = document.getElementById("txt-first-name").value;//firstName = text in box as opposed to text box
    console.log("Hello " + firstName + "!");
}



//document.getElementById("ani-button").onclick = hideButton;









/*

const funcName =() => {
    6+7;
}

const functName = () => {
    return 13;
}

//these two are equivalent. you don't need a return

const functionName = param => {

}

//these are all different syntaxes
*/