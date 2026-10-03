// Minimal JS for modal, nav, form demo (styling is the graded part).
document.getElementById('year').textContent = new Date().getFullYear();
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
const backdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
document.querySelectorAll('.open-modal').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.work-card');
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    backdrop.hidden = false;
  });
});
document.getElementById('modalClose').addEventListener('click', () => {
  backdrop.hidden = true;
});
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) backdrop.hidden = true;
});
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const err = document.getElementById('formError');
  const ok = document.getElementById('formSuccess');
  err.textContent = '';
  ok.textContent = '';
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if (name.length < 2) { err.textContent = 'Name min 2 chars.'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'Invalid email.'; return; }
  if (msg.length < 10) { err.textContent = 'Message min 10 chars.'; return; }
  ok.textContent = 'Thanks! Demo only, not sent.';
  e.target.reset();
});
