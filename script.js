const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll('main section')];
const links = [...document.querySelectorAll('.nav a')];
window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.id;
  });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#b56cff' : '';
  });
});
