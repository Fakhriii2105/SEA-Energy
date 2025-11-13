// Navbar transparent → solid (sebelumnya sudah ada)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  // biar animasi burger jadi X
  navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Progress Bar
    const progressBar = document.querySelector('.scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

const tabs = document.querySelectorAll('.projects-tabs .tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;
    contents.forEach(c => {
      c.classList.remove('active');
      if(c.id === target) c.classList.add('active');
    });
  });
});
