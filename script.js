document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const nav = document.querySelector("nav");
    const navHeight = nav.offsetHeight;
    const hamburger = document.querySelector(".hamburger");
    const navUl = document.querySelector("nav ul");

    // Smooth scroll when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navHeight,
                    behavior: "smooth"
                });
            }

            // Close mobile menu after clicking a link
            if (navUl.classList.contains("show")) {
                navUl.classList.remove("show");
            }
        });
    });

    // Highlight active section in nav
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 10;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });

    // Hamburger menu toggle for mobile
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navUl.classList.toggle("show");
        });
    }
});