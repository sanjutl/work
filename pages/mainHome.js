//nav
let header=document.querySelector('.header-part')
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






///




const wrapper=document.querySelector('.wrapper')
let slides=document.querySelectorAll('.carousel-item')
let bullets=document.querySelector('.carousel-bullets')
let carouselInfo=document.querySelectorAll('.description')
let bullet=Array.from(bullets.children)

const firstClone=slides[0].cloneNode(true)
firstClone.id='first-clone';
wrapper.append(firstClone)

let index=0
function updateImg(){
  let slides=document.querySelectorAll('.carousel-item')
  slides.forEach((slide)=>{
    slide.classList.remove('active')
  })
  
 
index++
slides[index].classList.add('active')

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

let sliding=setInterval(updateImg,3000)

let index2=1
function updateBullet(){
  setInterval(()=>{
    
    bullet.forEach((bullet)=>{
      bullet.classList.remove('active')
    })
    bullet[index2].classList.add('active')
    index2=(index2+1)%bullet.length
  },3000)
}

updateBullet()



//lazy image

let imageItems=document.querySelectorAll(".section-2-image-wrapper")



let options={
    rootMargin:'0px',
    threshold:0.2
}

let setActiveItems=(entries)=>{
    entries.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('active')
        }        
    });
}

let observer= new IntersectionObserver(setActiveItems,options)

imageItems.forEach((item)=>{
    observer.observe(item)
})



// carousle 2



const wrapper2=document.querySelector('.wrapper-2')
const slide2=document.querySelectorAll('.carousel-item-2')
console.log(slide2);
let slide2index=0
const ClonedDiv=slide2[0].cloneNode(true)
console.log(ClonedDiv);

ClonedDiv.id='second-clone';
wrapper2.append(ClonedDiv)
function carouselSlide(){
  let slides2=document.querySelectorAll('.carousel-item-2')
  slides2.forEach((slide)=>{
    slide.classList.remove('active')
  })
  
 
slide2index++
slides2[slide2index].classList.add('active')

slide2Width=slides2[slide2index].getBoundingClientRect().width;
wrapper2.style.transform=`translateX(-${slide2index*slide2Width}px)`;
wrapper2.style.transition='1s'

}
wrapper2.addEventListener('transitionend',()=>{
  let slides2=document.querySelectorAll('.carousel-item-2')
  if(slides2[slide2index].id===ClonedDiv.id){
    wrapper2.style.transition='none'
    slide2index=0
    wrapper2.style.transform=`translateX(-${slide2index*slide2Width}px)`;
  }
  
})
let sliding2=setInterval(carouselSlide,3000)

//carousel-2 description

let descriptionindex=1
let description2=document.querySelectorAll('.description-2')

function updateDescription(){
  setInterval(()=>{
    
    description2.forEach((description)=>{
      description.classList.remove('active')
    })
    description2[descriptionindex].classList.add('active')
    descriptionindex=(descriptionindex+1)%description2.length
  },3000)
}

updateDescription()





//sliding items

slidingItems=document.querySelectorAll('.tabs')


slidingItems.forEach((item)=>{
  item.addEventListener('click',function(){
    slidingItems.forEach((items)=>{
      items.classList.remove("active")
    })
    this.classList.add('active')
  })
})



//carousel with description
const wrapper3=document.getElementById('carousel-2')
const bullet3=document.querySelector('.bullets')
const bulletChild=Array.from(bullet3.children)

const slide3=Array.from(wrapper3.children)
console.log(slide3);
let index3=0;
function updateCarousle(){
    slide3.forEach((slide)=>{
        slide.classList.remove('active')
    })
    bulletChild.forEach((bullet)=>{
        bullet.classList.remove('active')
    })
    
    slide3[index3].classList.add('active')
    bulletChild[index3].classList.add('active')
    slideWidth=slide3[index3].getBoundingClientRect().width
    
    wrapper3.style.transform=`translateX(-${index3*slideWidth}px)`

    index3=(index3+1)%slide3.length;
    console.log(index3);
    
    
}
let descriptionSliding=setInterval(updateCarousle,3000)




//lazy-2

let imageItems2=document.querySelectorAll(".inner-wrapper > .image-container")
console.log(imageItems2);



let options2={
    rootMargin:'0px',
    threshold:0.1
}

let setActiveItems2=(entries)=>{
    entries.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('active')
        }        
    });
}

let observer2= new IntersectionObserver(setActiveItems2,options2)

imageItems2.forEach((item)=>{
    observer2.observe(item)
})
