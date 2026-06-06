let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('fa-xmark');
};

// Close mobile nav when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  });
});




ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
});




ScrollReveal().reveal('.home-content, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.home-img', { origin: 'left' });

const roleWords = ['AI/ML', 'Full-Stack', 'DSA'];
const roleWord = document.getElementById('role-word');

if (roleWord) {
  let roleIndex = 0;

  setInterval(() => {
    roleIndex = (roleIndex + 1) % roleWords.length;
    roleWord.style.opacity = '0';

    setTimeout(() => {
      roleWord.textContent = roleWords[roleIndex];
      roleWord.style.opacity = '1';
    }, 250);
  }, 2800);
}
ScrollReveal().reveal('.about-wrapper, .skills-grid, .projects-container', { origin: 'top' });
ScrollReveal().reveal('.contact-icons, .contact-text', { origin: 'bottom' });

// Skills Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    skillCards.forEach(card => {
      // Split the data-category attribute by space to get all categories for this card
      const categories = card.getAttribute('data-category').split(' ');
      if (filterValue === 'all' || categories.includes(filterValue)) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  });
});
