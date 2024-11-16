const wrapper = document.querySelector(".wrapper");
const article = document.querySelectorAll("article");
const getIndex = document.querySelector(".getIndex");

const slides = document.querySelectorAll(".carousel-div");

let index = 0;
let margin = 10;
function updateImg() {
  const slides = document.querySelectorAll(".carousel-div");
  index++;
  if (index === slides.length) {
    clearInterval(intervalSliding);
    index = 0;
    intervalSliding = setInterval(updateImg, 3000);
  }
  getIndex.innerHTML = `${index + 1}`;
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  article.forEach((article) => {
    article.classList.remove("active");
  });
  slides[index].classList.add("active");
  
  slidewidth = slides[index].getBoundingClientRect().width;

  wrapper.style.transform = `translate3d(-${
    index * slidewidth + margin
  }px,0px, 0px)`;
  wrapper.style.transition = "1s";

}
let intervalSliding = setInterval(updateImg, 3000);
