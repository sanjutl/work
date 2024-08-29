const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
let autoSlideInterval;

function updateCarouselPosition() {
  const itemWidth = carouselItems[0].clientWidth;
  const newPosition = -currentIndex * itemWidth;
  carouselWrapper.style.transform = `translateX(${newPosition}px)`;
  
  // Update active indicator
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
}

function showNextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarouselPosition();
}

function showPrevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarouselPosition();
}

function jumpToSlide(index) {
  currentIndex = index;
  updateCarouselPosition();
}

nextBtn.addEventListener('click', showNextItem);
prevBtn.addEventListener('click', showPrevItem);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => jumpToSlide(index));
});

// Auto-slide functionality
function startAutoSlide() {
  autoSlideInterval = setInterval(showNextItem, 3000); // Slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

carouselWrapper.addEventListener('mouseover', stopAutoSlide);
carouselWrapper.addEventListener('mouseout', startAutoSlide);

startAutoSlide(); // Start auto-slide on page load

// Optional: Add swipe functionality for touch devices
let startX;
carouselWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carouselWrapper.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) { // Swipe left
    showNextItem();
  } else if (startX < endX - 50) { // Swipe right
    showPrevItem();
  }
});


let allDiv=document.querySelectorAll('.con2-imgdiv')
console.log(allDiv)
let divOption={
  root:null,
  rootMargin:'0px',
  threshold:0.75,
}
let divObserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(!entry.isIntersecting){
      return
    }
      entry.target.classList.add('fade')
    
  })
},divOption)

allDiv.forEach((div)=>{
  divObserver.observe(div)
})