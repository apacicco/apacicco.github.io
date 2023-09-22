window.onload = () => {
    
    document.getElementById("show-button").onclick = showPhoto;
    document.getElementById("hide-button").onclick = hidePhoto;
    document.getElementById("move-button").onclick = moveButton;
    document.getElementById("message-button").onclick = writeMessage;
}


const showPhoto = () =>  {
    document.getElementById("photo").classList.remove("hide");
}

const hidePhoto = () => {
    document.getElementById("photo").classList.add("hide");
}

const moveButton = () => {
    document.getElementById("square").classList.add("animate");
}

const writeMessage = () => {
    const firstName = document.getElementById("txt-first-name").value;
    const rating = document.getElementById("txt-product-name").value;
    const comment = document.getElementById("txt-comment-name").value;
    const user = document.getElementById("txt-user-name").value;

    const messageP = document.getElementById("message");
    
    messageP.innerHTML += `<section class = "borders"> <p>product: ${firstName}</p> <p>stars: ${rating}</p> <p>${comment}</p> <p> user name: ${user}</p></section>`;

    const section = document.createElement("section");//creates a section in the cloud that can be modified in this file
    messageP.append(section);
    const h3 = document.createElement("h3");
    h3.textContent = `${firstName} ${rating}`;//makes these two variables h3 format
    section.append(h3);

}

/*
-gotta review if statements
-review hamburger toggling
*/