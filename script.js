const carouselSlide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.carousel-dot');

let counter = 0;
const size = items[0].clientWidth;

// Set the initial item as active
items[counter].classList.add('active');

// Next button functionality
nextBtn.addEventListener('click', () => {
  if (counter >= items.length - 1) return;
  items[counter].classList.remove('active'); // Remove active from current item
  counter++;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  items[counter].classList.add('active'); // Add active to new item
  updateDots();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  items[counter].classList.remove('active'); // Remove active from current item
  counter--;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  items[counter].classList.add('active'); // Add active to new item
  updateDots();
});

// Optional: Update dots to show the active image
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[counter].classList.add('active');
}

// Dots click event (optional)
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    items[counter].classList.remove('active');
    counter = index;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    items[counter].classList.add('active');
    updateDots();
  });
});
