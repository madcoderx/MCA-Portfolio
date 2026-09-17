const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("back-to-top");


/* ==============================
   MOBILE MENU
   ============================== */

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* ==============================
   CLOSE MENU AFTER CLICKING LINK
   ============================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ==============================
   DARK / LIGHT MODE
   ============================== */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    updateThemeIcon();

    saveTheme();

});


/* ==============================
   UPDATE THEME ICON
   ============================== */

function updateThemeIcon() {

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


/* ==============================
   SAVE THEME
   ============================== */

function saveTheme() {

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

}


/* ==============================
   LOAD SAVED THEME
   ============================== */

function loadTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }

    updateThemeIcon();

}


/* ==============================
   LOAD THEME WHEN PAGE OPENS
   ============================== */

loadTheme();


/* ==============================
   ACTIVE NAVIGATION LINK
   ============================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    links.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ==============================
   BACK TO TOP BUTTON
   ============================== */

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/* ==============================
   BACK TO TOP CLICK
   ============================== */

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});