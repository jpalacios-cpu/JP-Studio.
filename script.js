
// =====================================
// JHOMER PALACIOS - PERSONAL PORTFOLIO
// JavaScript Functionality
// =====================================


// 1. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

  });

  // Close menu after clicking a navigation link

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.textContent = "☰";

    });

  });

}


// 2. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


// 3. SCROLL REVEAL ANIMATIONS

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(

    (entries, currentObserver) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          currentObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );

  revealItems.forEach((item) => {

    observer.observe(item);

  });

} else {

  // Show all elements if animation is unsupported

  revealItems.forEach((item) => {

    item.classList.add("visible");

  });

}


// 4. SMOOTH NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// =====================================
// END OF JAVASCRIPT
// =====================================
