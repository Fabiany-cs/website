let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlight active section on scroll
window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

// Toggle navbar on menu icon click
menuIcon.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click from propagating to document
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Close navbar when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x'); // Remove 'X' icon
    navbar.classList.remove('active'); // Hide menu
  });
});

// Close navbar when clicking anywhere outside of it
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
});

// Ensure navbar remains hidden on page load (for some browsers)
document.addEventListener('DOMContentLoaded', () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
});
