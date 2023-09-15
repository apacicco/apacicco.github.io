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

}