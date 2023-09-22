window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("age-button").onclick = averageAge;
    document.getElementById("therm").onclick = changeTherm;

    document.getElementById("ex-one-button").onclick = hideExOne;
    document.getElementById("ex-two-button").onclick = hideExTwo;


}

const toggleNav = () => {//doing nothing rn 
    document.getElementById("main-nav-items").classList.toggle("hide-small");
    console.log("toggleNav here");
}

const clickEx =() => {
        document.getElementById("ex-one-button").classList.toggle("hide");
        document.getElementById("ex-two-button").classList.toggle("hide");
}


const hideExOne = () => {
    //document.getElementById("hamburger").classList.add("hide");
    document.getElementById("pg1").classList.remove("hide");
    document.getElementById("pg2").classList.add("hide");
    console.log("hideExOne here");
}


const hideExTwo = () => {
    //document.getElementById("hamburger").classList.add("hide");
    document.getElementById("pg2").classList.remove("hide");
    document.getElementById("pg1").classList.add("hide");
    console.log("hideExOne here");
}








const changeTherm = () => {
    console.log("in therm");
   
   
    const donation = parseInt(document.getElementById("txt-therm-determiner").value);
    const error = document.getElementById("error-num");
    const root = document.querySelector(":root");

    if(donation < 0 || donation > 10000)
    {
        root.style.setProperty("--percent", "0%");
        error.classList.remove("therm-red-color");
        error.innerHTML("Not a valid input")
    }
    else if (donation > 0 && donation <= 2500) 
    {
        root.style.setProperty("--percent", "25%");
    }
    else if (donation > 2500 && donation <= 5000) 
    {
        console.log("in 2500-5000")
        root.style.setProperty("--percent", "50%");
    }
    else if (donation > 5000 && donation <= 7500) 
    {
        root.style.setProperty("--percent", "75%");
    }
    else if (donation > 7500 && donation <= 10000) 
    {
        root.style.setProperty("--percent", "1000%");
    }
    else 
    {
        error.innerHTML("horrific error occured.");
    }



}










const averageAge = () => {
    /*
    document.getElementById("square").classList.toggle("animate");//grabs "square", adds the animate class to it///toggle adds/removes
    document.getElementById("ani-button").classList.add("hide");//grabs "ani-button", adds the hide class to it
    */

    console.log("move button")
    const name1 = document.getElementById("txt-first-name").value;
    const name2 = document.getElementById("txt-second-name").value;
    const name3 = document.getElementById("txt-third-name").value;

    const age1 = parseInt(document.getElementById("txt-first-age").value);
    const age2 = parseInt(document.getElementById("txt-second-age").value);
    const age3 = parseInt(document.getElementById("txt-third-age").value);

    const messageP = document.getElementById("message");

    if(age1 > age2 && age2 > age3)
    {
        messageP.innerHTML += `<p>Oldest to Youngest: ${name1}, ${name2}, ${name3}</p>`;
        console.log("here");
    }
    else if((age1 > age3 && age3 > age2))
    {
        messageP.innerHTML += `<p>Oldest to Youngest: ${name1}, ${name3}, ${name2}</p>`;
    }
    else if((age2 > age1 && age1 > age3))
    {
        messageP.innerHTML += `<p>Oldest to Youngest: ${name2}, ${name1}, ${name3}</p>`;
    }
    else if((age2 > age3 && age3 > age1))
    {
        messageP.innerHTML += `<p>Oldest to Youngest: ${name2}, ${name3}, ${name2}</p>`;
    }
    else if((age3 > age2 && age2 > age1))
    {
        messageP.innerHTML += `<p>Oldest to Youngest: ${name3}, ${name2}, ${name1}</p>`;
    }
    else if((age3 > age1 && age1 > age2))
    {
        messageP.innerHTML += `<p>Oldest to Youngest: ${name3}, ${name1}, ${name2}</p>`;
    }
    else if (age3 <= 0 || age2 <= 0 || age1 <= 0){
        messageP.innerHTML += `<p>no negative numbers</p>`;
    }
    else if((age3 == age1) || (age1 == age2) || (age3 == age2) || ((age1 == age2) && (age2 == age3))){
        messageP.innerHTML += `<p>Matching ages. Cannot compute</p>`;
        console.log("in equivalent ages");
    }
    else 
    {
        messageP.innerHTML += `<p>Invalid Info</p>`;
    }
    


}