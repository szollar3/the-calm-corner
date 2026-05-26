// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

  // NAVBAR SCROLL
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // MOBILE MENU
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });
  }

  // CLOSE MOBILE MENU WHEN CLICKING LINK
  const mobileLinks = document.querySelectorAll(".mobile-link");

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });

  // FAQ ACCORDION
  const faqButtons = document.querySelectorAll(".faq-q");

  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      const expanded =
        button.getAttribute("aria-expanded") === "true";

      const answerId =
        button.getAttribute("aria-controls");

      const answer =
        document.getElementById(answerId);

      button.setAttribute(
        "aria-expanded",
        !expanded
      );

      if (answer) {
        answer.hidden = expanded;
      }
    });
  });

  // SCROLL REVEAL
  const revealElements =
    document.querySelectorAll(".reveal");

  const observer =
    new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }

      });

    });

  revealElements.forEach(function (element) {
    observer.observe(element);
  });

});