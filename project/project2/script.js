window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;

    document.getElementById("button-submit").onsubmit = sendEmail;
}

const toggleNav = () => {
    document.getElementById("hamburger").classList.toggle("show");

    document.getElementById("main-nav").classList.toggle("hide-small");

    console.log("toggleNav here");
}

const sendEmail =(e)=> {//e is event
    e.preventDefault();//prevents total reload and jumping to top of page
    document.getElementById("results").classList.remove("hide-small");
    const form = document.getElementById("text-comment");//form name;
    const name = box.elements["elements whatever they are"].value;
    const demeanor = form.elements["demeanor"].value; 
    const termsChecked = form.elements["terms"].checked;
   
    console.log(name);

    console.log(getRadioValue("id"));


}


const getRadioValue =(radioName)=> {
    let radios = document.getElementsByName(radioName);//set

    for(let i in radios){
        if (radios[i].checked){
            return radios[i].value;
        }
    }
    return "nothing has been checked";
};










