// Scroll fade-in
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => observer.observe(el));
// Lightbox modal viewer
document.querySelectorAll('.clickable-cert').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'lightbox';
    modal.innerHTML = `
      <div class="lightbox-content">
        <img src="${img.dataset.full}" />
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', () => modal.remove());
  });
});
// Counter animation
function animateValue(id, end, duration = 2000) {
  const el = document.getElementById(id);
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / end));
  const timer = setInterval(() => {
    start++;
    el.textContent = start;
    if (start === end) clearInterval(timer);
  }, stepTime);
}

window.addEventListener('DOMContentLoaded', () => {
  animateValue('year', 2016);
  animateValue('clients', 75);
  animateValue('projects', 120);
});
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}
