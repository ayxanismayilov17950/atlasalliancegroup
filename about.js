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
      el.textContent = end; // Ensure final value is exact
    }
  }, frameDuration);
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
