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
const form = document.getElementById("contact-form");
const formBtn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const publicKey = "I89Qo2el_H01M216N";
const serviceID = "service_tj5m947";
const templateID = "template_r14x9xb";

emailjs.init(publicKey);

form.addEventListener("submit", e => {
    e.preventDefault();
    formBtn.innerText = "Just A Moment...";
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        number: numberInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    };
    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            formBtn.innerText = "Message Send Successfully";
            nameInput.value = "";
            emailInput.value = "";
            numberInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
    }, (error) => {
        console.log(error);
        formBtn.innerText = "Something went wrong";
    });
});

// Hidden Skill Sections
function showHideSection1 () {
    const sect1 = document.getElementById("web-dev");
    if (sect1.classList.contains("hidden1")) {
        sect1.classList.remove("hidden1");
        return;
    }
    else {
        sect1.classList.add("hidden1");
    }
}

function showHideSection2 () {
    const sect2 = document.getElementById("web-design");
    if (sect2.classList.contains("hidden2")) {
        sect2.classList.remove("hidden2");
    }
    else {
        sect2.classList.add("hidden2");
    } 
}

function showHideSection3 () {
    const sect3 = document.getElementById("microsoft");
    if (sect3.classList.contains("hidden3")) {
        sect3.classList.remove("hidden3");
    }
    else {
        sect3.classList.add("hidden3");
    }
}

function disableScroll () {
    function disableScroll() {
        scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop;
        scrollLeft =
            window.scrollY ||
            document.documentElement.scrollLeft,
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }

    function enableScroll() {
        window.onscroll = function () { };
    }
}
