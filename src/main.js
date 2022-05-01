// DOM
const images = document.querySelector(".images");
const imagesCollection = document.querySelectorAll(".image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// UTILITY VARS
let index = 0;

// SET INTERVAL
let interval = setInterval(startInterval, 2000);

function startInterval() {
  index++;
  moveCarousel();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(startInterval, 2000);
}

function moveCarousel() {
  if (index > imagesCollection.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imagesCollection.length - 1;
  }
  images.style.transform = `translateX(-${index * 800}px)`;
}

// NAV BUTTONS
function prevSlide() {
  index--;
  resetInterval();
  moveCarousel();
}

function nextSlide() {
  index++;
  resetInterval();
  moveCarousel();
}
