const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("box-shadow", window.scrollY > 0);
    console.log("scroll");
})

const homeText = document.querySelector(".home-left h1");
window.addEventListener("scroll", () => {
    homeText.classList.toggle("animate__slideOutLeft", window.scrollY > 0)
})

if (window.matchMedia("(max-width: 1190px)").matches) {
    const contactImage = document.querySelector(".contact-right img");
    contactImage.style.display = "none";
}