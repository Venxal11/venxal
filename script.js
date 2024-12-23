// Floating effect for background cats
const catImages = document.querySelectorAll(".background-cats .cat-image");

catImages.forEach((cat, index) => {
  const randomSpeed = Math.random() * 5 + 3; // Random speed between 3 and 8 seconds
  const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds

  cat.style.animation = `float ${randomSpeed}s ease-in-out infinite ${randomDelay}s`;
});

// Add tooltips to social icons
const socialLinks = document.querySelectorAll(".social-icons a");

socialLinks.forEach(link => {
  const tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.textContent = link.querySelector("img").alt;
  link.appendChild(tooltip);
  link.addEventListener("mouseenter", () => tooltip.classList.add("visible"));
  link.addEventListener("mouseleave", () => tooltip.classList.remove("visible"));
});

// Carousel for favorite artists
let currentSlide = 0;
const carousel = document.querySelector(".band-list");
const carouselItems = carousel.querySelectorAll("li");
const carouselNext = document.createElement("button");
const carouselPrev = document.createElement("button");

carouselNext.textContent = "→";
carouselPrev.textContent = "←";
carouselNext.className = "carousel-next";
carouselPrev.className = "carousel-prev";

carousel.parentElement.appendChild(carouselNext);
carousel.parentElement.appendChild(carouselPrev);

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

carouselNext.addEventListener("click", () => {
  if (currentSlide < carouselItems.length - 1) currentSlide++;
  else currentSlide = 0; // Loop back to the start
  updateCarousel();
});

carouselPrev.addEventListener("click", () => {
  if (currentSlide > 0) currentSlide--;
  else currentSlide = carouselItems.length - 1; // Loop to the end
  updateCarousel();
});

// Initialize
updateCarousel();
