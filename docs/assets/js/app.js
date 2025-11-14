const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    siteNav.classList.toggle('open');
  });
}

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const heroCarousel = document.querySelector('.hero-carousel');
if (heroCarousel) {
  const slides = heroCarousel.querySelectorAll('.carousel-slide');
  const dots = heroCarousel.querySelectorAll('.carousel-dots button');
  let current = 0;

  const showSlide = (index) => {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === current);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === current);
    });
  };

  let autoPlay = setInterval(() => showSlide(current + 1), 4500);

  const resetAutoPlay = () => {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => showSlide(current + 1), 4500);
  };

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetAutoPlay();
    });
  });
}
