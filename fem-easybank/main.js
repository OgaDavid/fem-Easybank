const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("box-shadow", window.scrollY > 0);
    console.log("scroll");
})