// Menu toggle functionality
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let darkmodeIcon = document.querySelector('#darkmode-icon');

// Dark/Light Mode
darkmodeIcon.onclick = () => {
  darkmodeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('light-mode');
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Section active link highlighting
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          ?.classList.add("active");
      });
    }
  });

  // Sticky header implementation
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Back to top button visibility (Wait, I need to select it first, but it's simpler to just query it here or globally)
  let footerIconTop = document.querySelector('.footer-iconTop');
  if (footerIconTop) {
    footerIconTop.classList.toggle('show-back-to-top', window.scrollY > 100);
  }

  // Remove toggle icon and navbar when clicking navbar link (for mobile)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ScrollReveal animations
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .testimonial-box, .skills-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js for text animation
const typed = new Typed('.multiple-text', {
  strings: ['Full-Stack Web Developer', 'UI/UX Designer', 'Digital Marketing Specialist'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-box');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');

      // Filter portfolio items
      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic form validation
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      if (!fullname || !email || !subject || !message) {
        formStatus.textContent = 'Please fill in all required fields.';
        formStatus.className = 'form-status error';
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        formStatus.className = 'form-status error';
        return;
      }

      // Form submission via Formspree
      formStatus.textContent = 'Sending message...';
      formStatus.className = 'form-status';

      fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          response.json().then(data => {
            console.error('Formspree Error:', data); // Log detailed error
            if (Object.hasOwn(data, 'errors')) {
              formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
            } else {
              formStatus.textContent = 'Oops! There was a problem submitting your form';
            }
            formStatus.className = 'form-status error';
          });
        }
      }).catch(error => {
        console.error('Fetch Error:', error); // Log network error
        formStatus.textContent = 'Oops! There was a problem submitting your form. Check console for details.';
        formStatus.className = 'form-status error';
      });
    });
  }
});

// Lazy loading for images
// Lazy loading for images
// Native loading="lazy" is now used in HTML, so this script is redundant and removed.

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});
