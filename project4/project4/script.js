window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;

    document.getElementById("contact-form").onsubmit = showEmailResult;

    
}

const toggleNav = () => {
    document.getElementById("hamburger").classList.toggle("show");

    document.getElementById("main-nav").classList.toggle("hide-small");

    console.log("toggleNav here");
}

const showEmailResult = async (e) => {
    e.preventDefault();
    console.log("In show email result")
    
    const result = document.getElementById("result");
    console.log("before");
    let response = await getEmailResult();
    console.log("after");
    if (response.status == 200) {
        console.log("inside if");
      result.innerHTML = "Email Successfully Sent";
    } else {
        console.log("other if");
      result.innerHTML = "Sorry, your email was not sent.";
    }
  };
  
  const getEmailResult = async (e) => {

    console.log("in get Email results");

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      return response;
    } catch (error) {
      console.log(error);
      document.getElementById("result").innerHTML =
        "Sorry your email couldn't be sent";
    }
  };

/*






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




*/



