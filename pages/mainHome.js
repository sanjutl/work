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