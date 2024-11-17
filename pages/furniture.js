
let index = 0;
const info=document.querySelectorAll('.info-container')
const slides = document.querySelectorAll(".wrapper-container");
console.log(slides);
let slideWidth=slides[0].getBoundingClientRect().width;
slides[1].style.transform = `translate3d(-${slideWidth}px,0px, 0px)`;
slides[2].style.transform = `translate3d(-${(2*slideWidth)}px,0px, 0px)`;




function updateImg() {
    index++;
slides.forEach((slide)=>{
    slide.classList.remove('active')
})
info.forEach((slide)=>{
    slide.classList.remove('active')
})
if(index>=slides.length){
    index=0
}
slides[index].classList.add('active')
info[index].classList.add('active')

}
let intervalSliding = setInterval(updateImg, 3000);
