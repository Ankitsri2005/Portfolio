let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};



ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
});




ScrollReveal().reveal('.home-content, .heading', { origin: 'bottom' });
ScrollReveal().reveal(' .about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content, .home-img, .skills-container,.projects-container', { origin: 'top' });
ScrollReveal().reveal('.contact-icons, .contact-text', { origin: 'bottom' });
ScrollReveal().reveal(' ', { origin: 'right' });

