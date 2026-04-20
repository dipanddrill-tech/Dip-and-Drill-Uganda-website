const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (mainNav.classList.contains("show")) {
      mainNav.classList.remove("show");
    }
  });
});

const revealItems = document.querySelectorAll(
  ".section, .service-card, .choose-card, .gallery-item, .video-card, .invoice-card, .cta-box, .team-card, .ceo-feature, .about-box"
);

revealItems.forEach(item => item.classList.add("reveal"));

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  revealItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you. Your inquiry has been received. Dip and Drill Uganda Limited will contact you soon.");
    contactForm.reset();
  });
}