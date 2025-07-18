
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});

// Role animation
const roles = [
  "Data Scientist",
  "Data Engineer",
  "Data Analyst",
  "Machine Learning Engineer"
];

let currentIndex = 0;
const roleElement = document.getElementById("animated-role");

setInterval(() => {
  currentIndex = (currentIndex + 1) % roles.length;
  roleElement.textContent = roles[currentIndex];
}, 2000);
