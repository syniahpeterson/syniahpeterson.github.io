// Toggle Icon Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

// index.html (I am a)
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "UI/UX Designer", "Software Engineering Major", "UNC Charlotte Senior"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove Toggle Icon and Navbar when link clicked
    menuIcon.classList.remove("fa-times");
    navbar.classList.remove("active");
};

// Scroll Reveal
ScrollReveal ({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".home-content, .heading", {origin: "top"});
ScrollReveal().reveal(".home-img, .skills-container, .projects-box, .contact-form", {origin: "bottom"});
ScrollReveal().reveal(".home-content h1, .about-img", {origin: "left"});
ScrollReveal().reveal(".home-content p, .about-content", {origin: "right"});

// EmailJS (Contact Form Email)
let form = document.getElementById("contact-form");
let formBtn = document.getElementById("btn");

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_tj5m947", "template_r14x9xb", params).then((res) => {
        console.log(res);
        alert("Your message was sent successfully!");
        form.reset();
    })
    .catch(err => console.log(err));
};

function enableSubmit () {
    let inputs = document.getElementsByClassName("required");
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
        let changedInput = inputs[i];
        if (changedInput.value.trim() === "" || changedInput.value === null) {
            isValid = false;
            break;
        }
    }
    formBtn.disabled = !isValid;
}
