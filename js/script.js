/* =========================================================
   PORTFOLIO WEBSITE - FINAL ORGANIZED JAVASCRIPT
   ========================================================= */


/* =========================================================
   GET HTML ELEMENTS
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("back-to-top");
const scrollProgress = document.getElementById("scroll-progress");


/* =========================================================
   MOBILE MENU
   ========================================================= */

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

const navLinksItems = document.querySelectorAll(
    ".nav-links a"
);

navLinksItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN WINDOW GETS WIDER
   ========================================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

});


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    updateThemeIcon();

    saveTheme();

});


/* =========================================================
   UPDATE THEME ICON
   ========================================================= */

function updateThemeIcon() {

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

}


/* =========================================================
   SAVE THEME
   ========================================================= */

function saveTheme() {

    const currentTheme =
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

    localStorage.setItem(
        "theme",
        currentTheme
    );

}


/* =========================================================
   LOAD SAVED THEME
   ========================================================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    } else {

        document.body.classList.remove(
            "dark-mode"
        );

    }

    updateThemeIcon();

}


/* Load theme when page opens */

loadTheme();


/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */

const sections =
    document.querySelectorAll("section");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 140;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinksItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */

function updateScrollProgress() {

    if (!scrollProgress) {
        return;
    }

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (documentHeight <= 0) {

        scrollProgress.style.width = "0%";

        return;
    }

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        Math.min(scrollPercentage, 100) + "%";

}


/* =========================================================
   BACK TO TOP BUTTON
   ========================================================= */

function updateBackToTop() {

    if (!backToTop) {
        return;
    }

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   COMBINED SCROLL EVENT
   ========================================================= */

window.addEventListener(
    "scroll",
    function () {

        updateActiveNavigation();

        updateScrollProgress();

        updateBackToTop();

    },
    {
        passive: true
    }
);


/* Run once when page loads */

updateActiveNavigation();

updateScrollProgress();

updateBackToTop();


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section > h2, " +
        ".about-content, " +
        ".skill-card, " +
        ".project-card, " +
        ".education-card, " +
        ".contact-section > p, " +
        ".contact-item"
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


/* =========================================================
   INTERSECTION OBSERVER
   ========================================================= */

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );


} else {

    /* Fallback for older browsers */

    revealElements.forEach(
        function (element) {

            element.classList.add("show");

        }
    );

}