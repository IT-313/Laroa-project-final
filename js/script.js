document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-cart");

  cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const productName = button.getAttribute("data-product");

      alert(productName + " has been added to your cart.");
    });
  });

  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("newsletterEmail").value;

      alert("Thank you for subscribing, " + email + "!");

      newsletterForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("fullName").value;

      alert("Thank you, " + name + "! Your message has been sent.");

      contactForm.reset();
    });
  }

  const navbarLinks = document.querySelectorAll(".navbar-collapse .nav-link");

  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const navbarButton = document.querySelector(".navbar-toggler");

        navbarButton.click();
      }
    });
  });

  const sections = document.querySelectorAll("section[id]");

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 150;

      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");

      const linkTarget = link.getAttribute("href");

      if (linkTarget === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  });
});