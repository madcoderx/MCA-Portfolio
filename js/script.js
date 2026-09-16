const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

const themeToggle = document.getElementById("theme-toggle");


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
   DARK MODE
   ============================== */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});