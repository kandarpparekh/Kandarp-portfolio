// script.js

// Smooth scroll for nav menu links
document.querySelectorAll('nav .menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset for sticky header
        behavior: 'smooth'
      });
    }
  });
});

// "Let's Connect" button click action
const connectBtn = document.querySelector('.connect-btn');
if (connectBtn) {
  connectBtn.addEventListener('click', () => {
    alert("Thanks for reaching out! Scroll down to the contact section to connect with me 🚀");
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
}

// Contact form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // stop actual submission
    const firstName = this.firstName.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!firstName || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    alert("Thank you " + firstName + "! Your message has been received ✅");
    this.reset();
  });
}

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑";
scrollBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.background = "#2ecc71";
scrollBtn.style.color = "#000";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

// Show button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top on click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
