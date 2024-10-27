function toggleDropdown(dropdownNumber) {
  const dropdowns = document.querySelectorAll(".dropdown-content");

  const selectedDropdown = document.getElementById(`dropdown${dropdownNumber}`);
  if (selectedDropdown.classList.contains("show")) {
    selectedDropdown.classList.remove("show");
    dropdowns.classList.remove("show");
  } else {
    selectedDropdown.classList.add("show");
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => dropdown.classList.remove("show"));
  }
};

//img animation
let imageItems = document.querySelectorAll(".container-1-image-wrapper");

let options = {
  rootMargin: "0px",
  threshold: 0.2,
};

let setActiveItems = (entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("active");
    }
  });
};

let observer = new IntersectionObserver(setActiveItems, options);

imageItems.forEach((item) => {
  observer.observe(item);
});

//slider
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
};

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
}

//carousel
const wrapper = document.querySelector(".carousel-wrapper");
const slides = Array.from(wrapper.children);
console.log(slides.length);

let index = 0;
let interval = 3000;
const arrowright = document.querySelector(".fa-arrow-right");
const arrowleft = document.querySelector(".fa-arrow-left");
function updatePosition() {
  slideWidth = slides[0].getBoundingClientRect().width;
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
}

arrowright.addEventListener("click", () => {
  clearInterval(intervalSliding);
  index = (index + 1) % slides.length;
  updatePosition();
  intervalSliding = setInterval(sliding, 4000); 
  
});

arrowleft.addEventListener("click", () => {
  clearInterval(intervalSliding);
  index = (index - 1) % slides.length;
  updatePosition();
  intervalSliding = setInterval(sliding, 4000);
});

function sliding() {
  index = (index + 1) % slides.length;
  updatePosition();
}
let intervalSliding = setInterval(sliding, interval);
