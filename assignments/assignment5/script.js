const toggleNav = () => {
    document.getElementById("user-nav").classList.toggle("hide-small");
}

window.onload = () => 
{
    document.getElementById("user-nav").onclick = toggleNav;
}