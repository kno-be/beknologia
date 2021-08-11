// STICKY NAVBAR

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll(".section");
const navbarLinks = document.querySelectorAll("a.navbar-link");


window.addEventListener("scroll", () => {
    if(window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.classList.add("change")
        }
    })
});




// END OF STICKY NAVBAR