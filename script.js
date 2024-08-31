
document.addEventListener('DOMContentLoaded', function() {
  const carouselRow = document.querySelector('.carousel');
  const carouselSlides = document.getElementsByClassName('carousel-items');
  const previous = document.querySelector('.left');
  const next = document.querySelector('.right');
  const mainContainer=document.querySelector('.container')

  let index = 1;
  let width = carouselSlides[0].clientWidth;

  
  carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';

  
  function previousSlide() {
      if (index <= 0) return;
      carouselRow.style.transition = 'transform 1s ease-in-out';
      index--;
      carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
  }

  
  function nextSlide() {
      if (index >= carouselSlides.length - 1) return;
      carouselRow.style.transition = 'transform 2s ease-out';
      index++;
      carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
  }

 
  carouselRow.addEventListener('transitionend', function() {
      if (carouselSlides[index].id === 'first') {
          carouselRow.style.transition = 'none';
          index = carouselSlides.length - index;
          carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
      }
      if (carouselSlides[index].id === 'last') {
          carouselRow.style.transition = 'none';
          index = carouselSlides.length - 2;
          carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
      }
  });

  function autoSlide(){
      deleteInterval=setInterval(time,1500);
      function time(){
          previousSlide()
      }
  }
  autoSlide()
  // mouse hover
  mainContainer.addEventListener('mouseover',()=>{ 
     clearInterval(deleteInterval)
  })
  mainContainer.addEventListener('mouseout',()=>{
      autoSlide()
  })
  previous.addEventListener('click', previousSlide);
  next.addEventListener('click', nextSlide);
  
});
const mainContainer=document.querySelector('.container')
setTimeout(()=>{
  mainContainer.style.display='none'
},7500)

let allDiv=document.querySelectorAll('.con2-imgdiv')
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


