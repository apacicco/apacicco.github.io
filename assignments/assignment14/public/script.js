const e = require("express");

console.log("hi");
/*
const addSomething =(e) => {
    //call a link 
    e.preventDefault();
    const section = document.getElementById("boxes");
    const input = document.createElement("input");
    input.type = "text";
    section.append(input);
}
*/
const addSomething = async(e) => {
    e.preventDefault();
    const form = document.getElementById("form-name");

    const formData = new FormData(form);//all form data is in FormData
    
    if(form.id.value == -1){
        formData.delete("id");
        formData.delete("img");

        response = await fetch("/api/jewelry", {
            method:"POST",
            body: formData
        })
    }
    console.log(...formData);
}

const getSomething = () => {
    const inputs = document.querySelectorAll("#boxes input");//queryselectorAll needs most direct path, so link => boxes => input of boxes
    let things = [];

    inputs.forEach((input)=>{
        things.push(input.value);

    });
    return things;
}

window.onload = () => {
    document.getElementById("add-edit-JEWEL-form").onsubmit = addSomething
}