const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links and sections
    navLinks.forEach((l) => l.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));

    // Add active class to clicked link
    link.classList.add("active");

    // Show corresponding section
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");

    // Smooth scroll to top of content
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
