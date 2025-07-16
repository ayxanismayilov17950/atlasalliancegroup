// Scroll fade-in (improved)
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => {
  observer.observe(el);

  const rect = el.getBoundingClientRect();
  if (rect.top >= 0 && rect.top <= window.innerHeight) {
    el.classList.add('visible');
  }
});

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
function animateValue(id, end, duration = 2000, fps = 60) {
  const el = document.getElementById(id);
  let start = 0;
  const frameDuration = 1000 / fps;
  const totalFrames = Math.round(duration / frameDuration);
  const increment = end / totalFrames;

  let frame = 0;
  const timer = setInterval(() => {
    frame++;
    start += increment;
    el.textContent = Math.round(start);
    if (frame >= totalFrames) {
      clearInterval(timer);
      el.textContent = end;
    }
  }, frameDuration);
}

// Init everything
window.addEventListener('DOMContentLoaded', () => {
  animateValue('year', 2016);
  animateValue('clients', 75);
  animateValue('projects', 120);
});

// Mobile nav toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}