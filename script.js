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

// Skills Page Button Functions
const webDevMore = document.getElementById("web-dev-more");
const webDevBtn = document.getElementById("web-dev-btn");

webDevBtn.addEventListener("click", () => {
    if (webDevMore.classList.contains("hide")) {
        webDevMore.classList.remove("hide");
        webDevMore.classList.add("viewing");
        webDevBtn.textContent = "Read Less";
    }
    else {
        webDevMore.classList.add("hide");
        webDevBtn.textContent = "Read More";
    }
});

const webDesignMore = document.getElementById("web-design-more");
const webDesignBtn = document.getElementById("web-design-btn");

webDesignBtn.addEventListener("click", ()=>{
    if (webDesignMore.classList.contains("hide")) {
        webDesignMore.classList.remove("hide");
        webDesignMore.classList.add("viewing");
        webDesignBtn.textContent = "Read Less";
    }
    else {
        webDesignMore.classList.add("hide");
        webDesignBtn.textContent = "Read More";
    }
});

const microsoftMore = document.getElementById("microsoft-more");
const microsoftBtn = document.getElementById("microsoft-btn");

microsoftBtn.addEventListener("click", () => {
    if (microsoftMore.classList.contains("hide")) {
        microsoftMore.classList.remove("hide");
        microsoftMore.classList.add("viewing");
        microsoftBtn.textContent = "Read Less";
    }
    else {
        microsoftMore.classList.add("hide");
        microsoftBtn.textContent = "Read More";
    }
});

const aboutBtn = document.getElementById("about-btn");
const aboutMore = document.getElementById("about-more");

aboutBtn.addEventListener("click", () => {
    if (aboutMore.classList.contains("hide")) {
        aboutMore.classList.remove("hide");
        aboutBtn.textContent = "Read Less";
    }
    else {
        aboutMore.classList.add("hide");
        aboutBtn.textContent = "Read More"
    }
});
