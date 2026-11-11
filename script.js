
/* DARK MODE AND LIGHT MODE */

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }

});


/* CONTACT FORM VALIDATION */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const status = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill all the fields.";
        status.style.color = "red";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        status.textContent = "Please enter a valid email.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Thank you! Your details are valid.";
    status.style.color = "green";

    form.reset();

});


/* INTERACTIVE NAVIGATION */

const navLinks = document.querySelectorAll("nav ul a");

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
