let header = document.querySelector(".nav");
let mobHeader = document.querySelector(".mob-header");

function logScreenDimensions() {
  let a = window.innerWidth;


  if (a <= 1024) {
    header.style.display = "none";
    mobHeader.style.display = "flex";
  } else {
    header.style.display = "block";
    mobHeader.style.display = "none";
  }
}

logScreenDimensions();
window.addEventListener("resize", logScreenDimensions);

let navItem = document.querySelector(".nav-contents");
let isHidden = false;

function toggleDisplay() {
  const element = document.querySelector(".nav-contents");
  if (!isHidden) {
    element.classList.add("active");
    isHidden = true;
  } else {
    element.classList.remove("active");
    isHidden = false;
  }
}
function showSubNav() {
  const svgItem = document.getElementById("svg");
  const element = document.querySelector(".sub-dropdown");
  if (!isHidden) {
    element.classList.add("active");
    isHidden = true;
    svgItem.style.transform = "rotate(90deg)";
  } else {
    element.classList.remove("active");
    isHidden = false;
    svgItem.style.transform = "rotate(0deg)";
  }
}

//


















const slides = document.querySelectorAll(".image-container-swipper");
console.log(slides)
const infoSlides = document.querySelectorAll(".info-contents");
let slideWidth=slides[0].getBoundingClientRect().width;
slides[1].style.transform = `translate3d(-${slideWidth}px,0px, 0px)`;
index=0
function updateImg() {
    index++;
slides.forEach((slide)=>{
    slide.classList.remove('active')
})
infoSlides.forEach((slide)=>{
    slide.classList.remove('active')
})
if(index>=slides.length){
    index=0
    
    
}
slides[index].classList.add('active')
infoSlides[index].classList.add('active')
}
let intervalSliding = setInterval(updateImg, 3000)