document.addEventListener("DOMContentLoaded", () => {

  // Sticky Header
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // Smooth Scroll Navigation
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Fade-in sections while scrolling
  const sections = document.querySelectorAll("section:not(.hero)");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => observer.observe(section));

  // Back to Top Button
  const btn = document.createElement("button");
  btn.id = "topBtn";
  btn.innerHTML = "↑";
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 350 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Footer Year
  const year = document.getElementById("year");
  if (year) {
    year.textContent =
      `© ${new Date().getFullYear()} Divya Chouhan • Senior Ruby on Rails Full Stack Developer`;
  }

});