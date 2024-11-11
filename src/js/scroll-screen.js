window.onload = () => {
  document.querySelector(".title-screen").style.animation =
    "narEnter 1s ease-out forwards";
  document.querySelector(".description-screen").style.animation =
    "descriptionEnter 1s ease-out forwards";
};

window.addEventListener("scroll", function () {
  const title = document.querySelector(".title-screen");
  const description = document.querySelector(".description-screen");
  const scrollPosition = window.scrollY;
  const maxScroll = document.querySelector(".first-screen").offsetHeight; 

  const rotation = Math.min((scrollPosition / maxScroll) * 90, 90);
  const translateY = Math.min(scrollPosition, maxScroll);

  title.style.transform = `translate(-50%, ${translateY}px) rotate(${-rotation}deg)`;
  description.style.transform = `translate(-50%, ${translateY}px) rotate(${-rotation}deg)`;
});
