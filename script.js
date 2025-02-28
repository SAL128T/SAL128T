
document.addEventListener('DOMContentLoaded', function() {
  // Navigation menu toggle for mobile
  const toggleMenu = document.querySelector('.toggle-menu');
  const navLinks = document.querySelector('.nav-links');

  toggleMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking on a nav link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send this data to a server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset the form
      contactForm.reset();
    });
  }

  // Newsletter form handling
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      // Here you would typically send this data to a server
      console.log('Newsletter subscription:', email);
      
      // Show success message
      alert('Thank you for subscribing to our newsletter!');
      
      // Reset the form
      newsletterForm.reset();
    });
  }

  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = 'white';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
  });

  // Image lazy loading animation
  const galleryItems = document.querySelectorAll('.gallery-item');
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  galleryItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transition = 'opacity 0.5s ease-in-out';
    observer.observe(item);
  });
});
