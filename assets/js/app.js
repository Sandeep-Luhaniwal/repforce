// ************Preloder*************
setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 2000);


// ************ AOS Animation ************
AOS.init({
    duration: 1000,
    once: true,
});

// ************ NavBar ************
let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let navbtn = document.querySelector(".nav-btn")
let navbtn11 = document.querySelector(".nav-btn11")
let navbtn12 = document.querySelector(".nav-btn12")
let navbtn13 = document.querySelector(".nav-btn13")
let navbtn14 = document.querySelector(".nav-btn14")
let hidden = document.querySelector(".hidden")

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("span4");
    span2.classList.toggle("span5");
    span3.classList.toggle("span6");
    hidden.style.display = 'none';
})
navbtn.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})

navbtn11.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
navbtn12.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
navbtn13.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
navbtn14.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})


// ************ Back to Top ************
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});