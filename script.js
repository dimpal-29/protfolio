document.getElementById('yr').textContent = new Date().getFullYear();

// Theme toggle
const tt = document.getElementById('themeToggle');
const html = document.documentElement;
const ic = tt.querySelector('i');
const applyTheme = (m)=>{
  html.setAttribute('data-theme',m);
  ic.className = m==='dark' ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme',m);
};
const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);
tt.addEventListener('click',()=>{
  const cur = html.getAttribute('data-theme');
  applyTheme(cur==='dark'?'light':'dark');
});

// Navbar scroll
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y>50);
  toTop.classList.toggle('show', y>300);
  const secs = document.querySelectorAll('section');
  const links = document.querySelectorAll('.nav-links a');
  let cur='home';
  secs.forEach(s=>{if(y>=s.offsetTop-160) cur=s.id});
  links.forEach(l=>{l.classList.toggle('active', l.getAttribute('href')==='#'+cur)});
});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Reveal + bars
const io = new IntersectionObserver(es=>{es.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('visible');
  e.target.querySelectorAll('.sk-fill').forEach(f=>f.style.width=f.dataset.w+'%');
  io.unobserve(e.target);
})},{threshold:0.12});

// Observe all reveal types
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach(el=>io.observe(el));

// Form
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();alert('Thank you! I will get back to you soon.');e.target.reset()});


// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
