window.onload = () => {
    const clickButton = document.getElementById("ani-button");
    //clickButton.onclick = changeText;//no parantheses = these execute the function immediately
    //can also do this: document.getElementById("button-click").onlclick = changeText
    //when the window is loaded, it will call the code in here
    document.getElementById("ani-button").onclick = moveButton;
    document.getElementById("button-show-name").onclick = displayName;
    
}

const moveButton = () => {
    /*
    document.getElementById("square").classList.toggle("animate");//grabs "square", adds the animate class to it///toggle adds/removes
    document.getElementById("ani-button").classList.add("hide");//grabs "ani-button", adds the hide class to it
    */

    const square = document.getElementById("square");
    const button = document.getElementById("button-click");

    if(square.classList.contains("animate")){
        square.classList.remove("animate");
        moveButton.innerHTML = "Start";
    }
    else {
        square.classList.add("animate");
        button.innerHTML("Stop");
    }

}


const displayName = () => {
    //get text out of text box
    const firstName = document.getElementById("txt-first-name").value;//firstName = text in box as opposed to text box
    console.log("Hello " + firstName + "!");
}