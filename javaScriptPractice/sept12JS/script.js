//Everything in here is javaScript



const changeText = () => {
    //will be called when that button is clicked
    const helloP = document.getElementById("date"); //this accesses the date id
    helloP.innerHTML="Happy Change";
    //function has not been called but it exists noiw

    helloP.classList.add("special");
}


window.onload = () => {
    const clickButton = document.getElementById("button-click");
    clickButton.onclick = changeText;//no parantheses = these execute the function immediately
    //can also do this: document.getElementById("button-click").onlclick = changeText
    //when the window is loaded, it will call the code in here
    document.getElementById("show-button").onclick = showPhoto;
    document.getElementById("hide-button").onclick = hidePhoto;
}


const showPhoto = () =>  {
    document.getElementById("photo").classList.remove("hide");
}

const hidePhoto = () => {
    document.getElementById("photo").classList.add("hide");
}





/*
alert("HBD!");

//const = use by default. these never change
//if you end up needing to change variable, use let
const helloP = document.getElementById("date"); //this accesses the date id
helloP.innerHTML="Happy Change";//changes whatever is in helloP, so whatever is in date in index.html
/*
    
    document refers to the whole body
*/
