
//navbar
let header=document.querySelector('.nav')
let mobHeader=document.querySelector('.mob-header')

function logScreenDimensions() {
   
    let a=window.innerWidth;
    console.log(a);
    
    if(a<=1024){
        header.style.display="none";
        mobHeader.style.display="flex";
        
    }else{
        header.style.display="block"
        mobHeader.style.display="none";
    }
}

logScreenDimensions();
window.addEventListener('resize', logScreenDimensions);

let navItem=document.querySelector(".nav-contents")
let isHidden = false;

function toggleDisplay() {
    const element = document.querySelector(".nav-contents")
    if (!isHidden) {
        element.classList.add("active");
        isHidden = true;
    } else {
        element.classList.remove("active");
        isHidden = false;
    }
}
function showSubNav() {
    const svgItem=document.getElementById("svg")
    const element = document.querySelector(".sub-dropdown")
    if (!isHidden) {
        element.classList.add("active");
        isHidden = true;
        svgItem.style.transform="rotate(90deg)"
    } else {
        element.classList.remove("active");
        isHidden = false;
        svgItem.style.transform="rotate(0deg)"
    }
}






//














const wrapper = document.querySelector(".wrapper");
const article=document.querySelectorAll("article")
console.log(article);

const slides = Array.from(wrapper.children);
let index=0
let margin=10
function updateImg(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
        
    }
    
)   
article.forEach((article)=>{
    article.classList.remove('active')
    
}

)   
slides[index].classList.add('active')
article[index].classList.add('active')
slidewidth=slides[0].getBoundingClientRect().width

    wrapper.style.transform=`translate3d(-${index * slidewidth+margin}px,0px, 0px)`
    index=(index+1)%slides.length;
    if(index==5){
        clearInterval(intervalSliding)
    }
}
let intervalSliding=setInterval(updateImg,3000)



const wrapper2=document.getElementById('carousel-2')
const bullet=document.querySelector('.bullets')
const bulletChild=Array.from(bullet.children)

const slide2=Array.from(wrapper2.children)
console.log(slide2);
let index2=0;
function updateCarousle(){
    slide2.forEach((slide)=>{
        slide.classList.remove('active')
    })
    bulletChild.forEach((bullet)=>{
        bullet.classList.remove('active')
    })
    
    slide2[index2].classList.add('active')
    bulletChild[index2].classList.add('active')
    slideWidth=slide2[index2].getBoundingClientRect().width
    
    wrapper2.style.transform=`translateX(-${index2*slideWidth}px)`

    index2=(index2+1)%slide2.length;
    console.log(index2);
    
    
}
let sliding=setInterval(updateCarousle,3000)