const toggleNav = () => {
    document.getElementById("main-nav").classList.toggle("hide-small");
}

window.onload = () => 
{
    document.getElementById("hamburger").onclick = toggleNav;
}

/*
add hamburger class to styles

*/