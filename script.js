
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transform = 'translateY(-30px)';
    setTimeout(() => {
      header.style.transition = 'all 1s ease';
      header.style.opacity = 1;
      header.style.transform = 'translateY(0)';
    }, 100);
  });
  
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

fadeInElements.forEach(el => observer.observe(el));

window.addEventListener('load', () => {
  const header = document.querySelector('.hero-content');
  header.classList.add('visible');
});
function animateValue(id, end, duration = 1500) {
  const el = document.getElementById(id);
  let start = 0;
  const step = Math.ceil(end / (duration / 20));
  const timer = setInterval(() => {
    start += step;
    if (start >= end) {
      el.textContent = end;
      clearInterval(timer);
    } else {
      el.textContent = start;
    }
  }, 20);
}

window.addEventListener('load', () => {
  animateValue('years', 8);
  animateValue('clients', 60);
  animateValue('projects', 120);
});

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}
