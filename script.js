
const slides = document.querySelectorAll('.bg-slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);


const cta = document.querySelector('.cta');

cta.addEventListener('click', (e) => {
  e.preventDefault();
  cta.textContent = 'Thanks for your interest!';
  cta.style.pointerEvents = 'none';
});
