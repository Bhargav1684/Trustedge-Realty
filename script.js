// This is optional, but can be used for pausing or controlling the slider in the future
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let totalSlides = slides.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector('.hero-slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeSlide, 5000); // Change image every 5 second

//login form 
// You can add any JavaScript functionality if needed. For now, we’ll keep it simple.
document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "" || password === "") {
    alert("Please fill in both fields");
  } else {
    alert(`Logged in successfully! Username: ${username}`);
    // You can implement further login functionality here
  }
});

//dropdown menu bar in main page
// JavaScript to toggle dropdowns on mobile devices
document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', function () {
    const dropdownContent = this.nextElementSibling;
    const isVisible = dropdownContent.style.display === 'block';
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.style.display = 'none'; // Close all dropdowns
    });
    if (!isVisible) {
      dropdownContent.style.display = 'block'; // Open clicked dropdown
    }
  });
});

//side bar property 
// Open and close sidebar functionality
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

openBtn.addEventListener('click', () => {
  sidebar.style.left = '0';
  content.style.marginLeft = '250px';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.left = '-250px';
  content.style.marginLeft = '0';
});

// section5 
// Simple script to initialize any additional effects
document.addEventListener("DOMContentLoaded", function () {
  // Example: Add smooth scroll when clicking the property section
  const properties = document.querySelectorAll('.property-item');

  properties.forEach(property => {
    property.addEventListener('click', () => {
      window.scrollTo({
        top: property.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });
});
  
