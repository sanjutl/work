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
  threshold: 0.5 // trigger when 50% of the element is in view
};

// Create the observer instance
const contentobserver = new IntersectionObserver(callback, options);

// Select the target element
const target = document.querySelector('.logo-content');

// Start observing the target element
contentobserver.observe(target);
})
// 1st carousel

document.addEventListener("DOMContentLoaded", function () {
  const wrapper=document.querySelector('.carousel-wrapper')
  console.log(wrapper);
  
  let slides=document.querySelectorAll('.carousel-item')
  const firstClone=slides[0].cloneNode(true)
  firstClone.id='first-clone';
wrapper.append(firstClone)
let index=0
function updateImg(){
  let slides=document.querySelectorAll('.carousel-item')
  

index++

slideWidth=slides[index].getBoundingClientRect().width;
wrapper.style.transform=`translateX(-${index*slideWidth}px)`;
wrapper.style.transition='1s'

}
wrapper.addEventListener('transitionend',()=>{
  let slides=document.querySelectorAll('.carousel-item')
  if(slides[index].id===firstClone.id){
    wrapper.style.transition='none'
    index=0
    wrapper.style.transform=`translateX(-${index*slideWidth}px)`;
  }
  
})
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
nextButton.addEventListener('click', () => {
  clearInterval(sliding); // Stop auto-sliding
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  wrapper.style.transition = '1s';
  sliding = setInterval(updateImg, 3000); // Restart auto-sliding
});
prevButton.addEventListener('click', () => {
  clearInterval(sliding); // Stop auto-sliding
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  wrapper.style.transition = '1s';
  sliding = setInterval(updateImg, 3000); // Restart auto-sliding
});
wrapper.addEventListener('touchstart', (e) => {
  clearInterval(sliding); // Stop auto-sliding
  startX = e.touches[0].clientX;
  isSwiping = true;
});
wrapper.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;

  // Move wrapper with the touch
  wrapper.style.transform = `translateX(calc(-${index * slideWidth}px + ${deltaX}px))`;
  wrapper.style.transition = 'none';
});
wrapper.addEventListener('touchend', (e) => {
  if (!isSwiping) return;
  isSwiping = false;

  const deltaX = currentX - startX;
  const threshold = slideWidth / 4; // Minimum distance to trigger a slide change

  if (deltaX > threshold) {
    // Swipe right (previous slide)
    index = index > 0 ? index - 1 : slides.length - 2;
  } else if (deltaX < -threshold) {
    // Swipe left (next slide)
    index = index < slides.length - 1 ? index + 1 : 0;
  }

  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  wrapper.style.transition = '1s';

  // Restart auto-sliding
  sliding = setInterval(updateImg, 3000);
});
let sliding=setInterval(updateImg,3000)
})



//2nd carousel

document.addEventListener("DOMContentLoaded", function () {
  const wrapper=document.querySelector('.mini-carousel-wrapper')
  console.log(wrapper);
  
  let slides=document.querySelectorAll('.mini-carousel-item')
  const firstClone=slides[0].cloneNode(true)
  firstClone.id='first-clone';
wrapper.append(firstClone)
let index=0
function updateImg(){
  let slides=document.querySelectorAll('.mini-carousel-item')
  

index++

slideWidth=slides[index].getBoundingClientRect().width;
wrapper.style.transform=`translateX(-${index*slideWidth}px)`;
wrapper.style.transition='1s'

}
wrapper.addEventListener('transitionend',()=>{
  let slides=document.querySelectorAll('.mini-carousel-item')
  if(slides[index].id===firstClone.id){
    wrapper.style.transition='none'
    index=0
    wrapper.style.transform=`translateX(-${index*slideWidth}px)`;
  }
  
})
const nextButton = document.querySelector('.next1-btn');
const prevButton = document.querySelector('.prev1-btn');
nextButton.addEventListener('click', () => {
  clearInterval(sliding); // Stop auto-sliding
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  wrapper.style.transition = '1s';
  sliding = setInterval(updateImg, 3000); // Restart auto-sliding
});
prevButton.addEventListener('click', () => {
  clearInterval(sliding); // Stop auto-sliding
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  wrapper.style.transition = '1s';
  sliding = setInterval(updateImg, 3000); // Restart auto-sliding
});

wrapper.addEventListener('touchstart', (e) => {
  clearInterval(sliding); // Stop auto-sliding
  startX = e.touches[0].clientX;
  isSwiping = true;
});
wrapper.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;

  // Move wrapper with the touch
  wrapper.style.transform = `translateX(calc(-${index * slideWidth}px + ${deltaX}px))`;
  wrapper.style.transition = 'none';
});
wrapper.addEventListener('touchend', (e) => {
  if (!isSwiping) return;
  isSwiping = false;

  const deltaX = currentX - startX;
  const threshold = slideWidth / 4; // Minimum distance to trigger a slide change

  if (deltaX > threshold) {
    // Swipe right (previous slide)
    index = index > 0 ? index - 1 : slides.length - 2;
  } else if (deltaX < -threshold) {
    // Swipe left (next slide)
    index = index < slides.length - 1 ? index + 1 : 0;
  }

  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  wrapper.style.transition = '1s';

  // Restart auto-sliding
  sliding = setInterval(updateImg, 3000);
});


let sliding=setInterval(updateImg,3000)
})


//

























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