const carousel = document.getElementById("carousel");
const numberOfSlides = carousel.children.length;
let autoplay = true;
const autoplayInterval = 2500;

const backButton = document.querySelector(".nav-left");
const forwardButton = document.querySelector(".nav-right");

const getCurrentSlide = () => {
  const carouselLeft = carousel.style.left.slice(0, -1);
  return parseInt(carouselLeft);
};

if (autoplay) {
  const currentSlide = getCurrentSlide();
  let playIndex = currentSlide;
  setInterval(() => {
    if (playIndex < numberOfSlides) {
      carousel.style.left = `-${playIndex}00%`;
      playIndex++;
    } else playIndex = 0;
  }, autoplayInterval);
}

function setBackButton() {
  return false;
}

backButton.addEventListener("click", () => {
  const currentSlide = getCurrentSlide();
  carousel.style.left = `${currentSlide + 100}%`;
});

forwardButton.addEventListener("click", () => {
  const currentSlide = getCurrentSlide();
  carousel.style.left = `${currentSlide - 100}%`;
});
