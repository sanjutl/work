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
console.log(slidewidth);

    wrapper.style.transform=`translate3d(-${index * slidewidth+margin}px,0px, 0px)`
    index=(index+1)%slides.length;
    if(index==5){
        clearInterval(intervalSliding)
    }
}
let intervalSliding=setInterval(updateImg,3000)