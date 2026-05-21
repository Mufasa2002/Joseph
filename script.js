/* =========================
   JOSEPH AMARA GBONDO PORTFOLIO
   PROFESSIONAL JAVASCRIPT
========================= */

// PAGE LOADER ANIMATION

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// SMOOTH BUTTON HOVER EFFECT

const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0px)";
    });

});


// NAVBAR ACTIVE LINK

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav =>
            nav.classList.remove("active")
        );

        this.classList.add("active");

    });

});


// SCROLL ANIMATION

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements =
document.querySelectorAll(
".hero, .info-card"
);

hiddenElements.forEach((el)=>
observer.observe(el)
);


// CONSOLE MESSAGE

console.log(
"Portfolio Website Loaded Successfully."
);