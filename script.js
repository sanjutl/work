const parentContainer = document.querySelector(".parent-container");
setTimeout(() => {
  parentContainer.style.display = "block";
}, 7500);
const mainContainer = document.querySelector(".container");
setTimeout(() => {
  mainContainer.style.display = "none";
}, 7500);

document.addEventListener("DOMContentLoaded", function () {
  const carouselRow = document.querySelector(".carousel");
  const carouselSlides = document.getElementsByClassName("carousel-items");

  let index = 1;
  let width = carouselSlides[0].clientWidth;

  carouselRow.style.transform = "translateX(" + -width * index + "px)";

  function previousSlide() {
    if (index <= 0) return;
    carouselRow.style.transition = "transform 1s ease-in-out";
    index--;
    carouselRow.style.transform = "translateX(" + -width * index + "px)";
  }

  carouselRow.addEventListener("transitionend", function () {
    if (carouselSlides[index].id === "first") {
      carouselRow.style.transition = "none";
      index = carouselSlides.length - index;
      carouselRow.style.transform = "translateX(" + -width * index + "px)";
    }
    if (carouselSlides[index].id === "last") {
      carouselRow.style.transition = "none";
      index = carouselSlides.length - 2;
      carouselRow.style.transform = "translateX(" + -width * index + "px)";
    }
  });

  function autoSlide() {
    deleteInterval = setInterval(time, 1500);
    function time() {
      previousSlide();
    }
  }
  autoSlide();
});

let allDiv = document.querySelectorAll(".con2-imgdiv");
let divOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};
let divObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("fade");
  });
}, divOption);

allDiv.forEach((div) => {
  divObserver.observe(div);
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;
  let autoSlideInterval;

  function updateCarouselPosition() {
    const itemWidth = carouselItems[0].clientWidth;
    const newPosition = -currentIndex * itemWidth;
    carouselWrapper.style.transform = `translateX(${newPosition}px)`;

    indicators.forEach((indicator) => indicator.classList.remove("active"));
    indicators[currentIndex].classList.add("active");
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarouselPosition();
  }

  function showPrevItem() {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarouselPosition();
  }

  function jumpToSlide(index) {
    currentIndex = index;
    updateCarouselPosition();
  }

  nextBtn.addEventListener("click", showNextItem);
  prevBtn.addEventListener("click", showPrevItem);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => jumpToSlide(index));
  });

  // Auto-slide functionality
  function startAutoSlide() {
    autoSlideInterval = setInterval(showNextItem, 3000); // Slide every 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  carouselWrapper.addEventListener("mouseover", stopAutoSlide);
  carouselWrapper.addEventListener("mouseout", startAutoSlide);

  startAutoSlide();
  let startX;
  carouselWrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carouselWrapper.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
      // Swipe left
      showNextItem();
    } else if (startX < endX - 50) {
      // Swipe right
      showPrevItem();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".mini-carousel-wrapper");
  const carouselItems = document.querySelectorAll(".mini-carousel-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;
  let autoSlideInterval;

  function updateCarouselPosition() {
    const itemWidth = carouselItems[0].clientWidth;
    const newPosition = -currentIndex * itemWidth;
    carouselWrapper.style.transform = `translateX(${newPosition}px)`;

    indicators.forEach((indicator) => indicator.classList.remove("active"));
    indicators[currentIndex].classList.add("active");
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarouselPosition();
  }

  function showPrevItem() {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarouselPosition();
  }

  function jumpToSlide(index) {
    currentIndex = index;
    updateCarouselPosition();
  }

  nextBtn.addEventListener("click", showNextItem);
  prevBtn.addEventListener("click", showPrevItem);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => jumpToSlide(index));
  });

  // Auto-slide functionality
  function startAutoSlide() {
    autoSlideInterval = setInterval(showNextItem, 3000); // Slide every 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  carouselWrapper.addEventListener("mouseover", stopAutoSlide);
  carouselWrapper.addEventListener("mouseout", startAutoSlide);

  startAutoSlide();
  let startX;
  carouselWrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carouselWrapper.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
      // Swipe left
      showNextItem();
    } else if (startX < endX - 50) {
      // Swipe right
      showPrevItem();
    }
  });
});

//section 7

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // Translate each layer at different speeds
  document.querySelector(".scroll-container").style.transform = `translateX(${
    scrollPosition * -0.3
  }px)`;
  document.querySelector(".scroll-container2").style.transform = `translate3d(${
    scrollPosition * 0.3
  }px,${0}px,${0}px)`;
});

const marker = document.querySelector(".section-7");
let scrollOffset = 0;

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollOffset = window.scrollY;
    }
  });
};
const observer = new IntersectionObserver(observerCallback, {
  root: null,
  threshold: 0,
});
observer.observe(marker);
window.addEventListener("scroll", () => {
  let measuredScrollY = Math.max(0, window.scrollY - scrollOffset);
  document.querySelector(".scroll-container").style.transform = `translateX(${
    measuredScrollY * -0.5
  }px)`;
  document.querySelector(".scroll-container2").style.transform = `translate3d(${
    measuredScrollY * 0.5
  }px,${0}px,${0}px)`;
});
