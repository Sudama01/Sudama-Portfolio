/* =========================================================
   SUDAMA KUMAR SHARMA - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   PRELOADER
   ========================================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);

    }, 700);

});


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;

    });


    document.querySelectorAll("a, button").forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.style.width = "45px";
            cursor.style.height = "45px";

        });


        element.addEventListener("mouseleave", () => {

            cursor.style.width = "28px";
            cursor.style.height = "28px";

        });

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    document.body.classList.toggle("menu-open");

});


document.querySelectorAll(".nav-link").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================================
   NAVBAR SCROLL
   ========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   TYPING EFFECT
   ========================================================= */

const typingText = document.getElementById("typingText");

const roles = [

    "Web Developer",
    "Python Developer",
    "Data Analytics Enthusiast",
    "Backend Developer",
    "Machine Learning Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );

}


typeEffect();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   COUNTERS
   ========================================================= */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const increment =
                    Math.max(
                        1,
                        Math.ceil(target / 40)
                    );


                const updateCounter = () => {

                    current += increment;

                    if (current >= target) {

                        counter.textContent =
                            target;

                        return;

                    }

                    counter.textContent =
                        current;

                    requestAnimationFrame(
                        updateCounter
                    );

                };


                updateCounter();

                observer.unobserve(counter);

            });

        },

        {
            threshold: 0.7
        }

    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* =========================================================
   SKILL BARS
   ========================================================= */

const skillBars =
    document.querySelectorAll(".skill-bar span");


const skillObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                const bar = entry.target;

                bar.style.width =
                    bar.dataset.width;

                observer.unobserve(bar);

            });

        },

        {
            threshold: 0.5
        }

    );


skillBars.forEach((bar) => {

    skillObserver.observe(bar);

});


/* =========================================================
   PROJECT FILTER
   ========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        projectCards.forEach((card) => {

            const categories =
                card.dataset.category;


            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform =
                        "translateY(0)";

                }, 30);

            } else {

                card.style.opacity = "0";
                card.style.transform =
                    "translateY(20px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 300);

            }

        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const body =

        `Hello Sudama,%0D%0A%0D%0A` +

        `Name: ${encodeURIComponent(name)}%0D%0A` +

        `Email: ${encodeURIComponent(email)}%0D%0A%0D%0A` +

        `${encodeURIComponent(message)}`;


    const mailto =

        `mailto:sudama4871@gmail.com` +

        `?subject=${encodeURIComponent(subject)}` +

        `&body=${body}`;


    window.location.href = mailto;

});


/* =========================================================
   PARALLAX HERO
   ========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (window.innerWidth > 900) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (window.innerWidth / 2 -
                event.clientX) / 70;

        const y =
            (window.innerHeight / 2 -
                event.clientY) / 70;


        if (heroVisual) {

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }

    });

}


/* =========================================================
   PROJECT CARD TILT
   ========================================================= */

if (window.innerWidth > 900) {

    document.querySelectorAll(".project-card")
        .forEach((card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (y - centerY) / 30;

                    const rotateY =
                        (centerX - x) / 30;


                    card.style.transform =
                        `translateY(-10px)
                         perspective(700px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

}


/* =========================================================
   ESCAPE KEY - CLOSE MENU
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

    }

});