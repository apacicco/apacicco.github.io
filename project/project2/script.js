window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
}

const toggleNav = () => {
    document.getElementById("hamburger").classList.toggle("show");

    document.getElementById("main-nav").classList.toggle("hide-small");

    console.log("toggleNav here");
}