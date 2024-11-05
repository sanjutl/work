const parentContainer = document.querySelector(".parent-container");
setTimeout(() => {
  parentContainer.style.display = "block";
}, 9000);
const mainContainer = document.querySelector(".container");
setTimeout(() => {
  mainContainer.style.display = "none";
}, 9000);

document.addEventListener("DOMContentLoaded", function () {
  const carouselRow = document.querySelector(".carousel");
  const carouselSlides = document.getElementsByClassName("carousel-items");

  let index = 1;
  let width = carouselSlides[0].clientWidth;

  carouselRow.style.transform = "translateX(" + -width * index + "px)";

  function previousSlide() {
    if (index <= 0) return;
    carouselRow.style.transition = "transform 1s ease-in";
    index--;
    console.log(index)
    carouselRow.style.transform = "translateX(" + -width * index + "px)";
  }

    carouselRow.addEventListener("transitionend", function () {
      if (carouselSlides[index].id === "last") {
        carouselRow.style.transition = "none";
        index = carouselSlides.length - 2;
        carouselRow.style.transform = "translateX(" + -width * index + "px)";
      }
    });

  function autoSlide() {
    deleteInterval = setInterval(time, 1500)
      
        function time(){
          if(carouselSlides[index].id=="stop"){
            clearInterval(deleteInterval)
          }else{
            previousSlide()
          }
        }}
  autoSlide();
});


document.addEventListener("DOMContentLoaded", function () {

// Define the callback function
const callback = (entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add("content-fade");
  });
};

// Set options for the observer
const options = {
  root: null, // default is the viewport
  rootMargin: '0px',
  threshold: 0.25 // trigger when 50% of the element is in view
};

// Create the observer instance
const contentobserver = new IntersectionObserver(callback, options);

// Select the target element
const target = document.querySelector('.logo-content');

// Start observing the target element
contentobserver.observe(target);
})










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


const marker = document.querySelector(".section-7");
let scrollOffset = 0;

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('hai');
      
      scrollOffset = window.scrollY;
      window.addEventListener("scroll", () => {
        let measuredScrollY = Math.max(0, window.scrollY - scrollOffset);
        console.log(window.scrollY);
        
        document.querySelector(".scroll-container").style.transform = `translateX(${
          measuredScrollY * -0.2
        }px)`;
        document.querySelector(".scroll-container2").style.transform = `translate3d(${
          measuredScrollY * 0.2
        }px,${0}px,${0}px)`;
      });
    }
  });
};
const observer = new IntersectionObserver(observerCallback, {
  root: null,
  threshold: 0.1,
});
observer.observe(marker);


//fading images

document.addEventListener("DOMContentLoaded", function () {
  let backgrounds=document.querySelectorAll(".fading-images")
  let imageIndex=0
  let changeColor=document.querySelector(".section-8")
  const colors = ["rgb(238,238,238)","rgb(169,184,195)"];
  function changeBackground(){
    backgrounds[imageIndex].classList.remove("showing");
    imageIndex++
    if(imageIndex>=backgrounds.length){
      imageIndex=0
    }
    backgrounds[imageIndex].classList.add("showing")
    changeColor.style.backgroundColor = colors[imageIndex];


  }
  setInterval(changeBackground,4000)
})