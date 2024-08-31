
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
  
  
});
const parentContainer=document.querySelector('.parent-container')
setTimeout(()=>{
  parentContainer.style.display="block"
},7500)
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


// page slide


document.addEventListener('DOMContentLoaded', function() {
  const pagecarouselRow = document.querySelector('.pagecarousel');
  const pagecarouselSlides = document.getElementsByClassName('pagecarousel-items');
  const previous = document.querySelector('.left');
  const next = document.querySelector('.right');
  const pagemainContainer=document.querySelector('.pagecontainer')
 
  let pageindex = 1;
  let width = pagecarouselSlides[0].clientWidth;

  
  pagecarouselRow.style.transform = 'translateX(' + (-width * pageindex) + 'px)';

  
  function lastSlide() {
      if (pageindex <= 0) return;
      pagecarouselRow.style.transition = 'transform 1s ease-in-out';
      pageindex--;
      pagecarouselRow.style.transform = 'translateX(' + (-width * pageindex) + 'px)';
  }

  
  function forwardSlide() {
      if (pageindex >= pagecarouselSlides.length - 1) return;
      pagecarouselRow.style.transition = 'transform 1s ease-out';
      pageindex++;
      pagecarouselRow.style.transform = 'translateX(' + (-width * pageindex) + 'px)';
  }

 
  pagecarouselRow.addEventListener('transitionend', function() {
      if (pagecarouselSlides[pageindex].id === 'pagefirst') {
          pagecarouselRow.style.transition = 'none';
          pageindex = pagecarouselSlides.length - pageindex;
          pagecarouselRow.style.transform = 'translateX(' + (-width * pageindex) + 'px)';
      }
      if (pagecarouselSlides[pageindex].id === 'pagelast') {
          pagecarouselRow.style.transition = 'none';
          pageindex = pagecarouselSlides.length - 2;
          pagecarouselRow.style.transform = 'translateX(' + (-width * pageindex) + 'px)';
      }
  });

  function autoSliding(){
      deleteInterval=setInterval(time,3000);
      function time(){
          forwardSlide()
      }
  }
  autoSliding()
  // mouse hover
  pagemainContainer.addEventListener('mouseover',()=>{ 
     clearInterval(deleteInterval)
  })
  pagemainContainer.addEventListener('mouseout',()=>{
      autoSlide()
  })
  previous.addEventListener('click', lastSlide);
  next.addEventListener('click', forwardSlide);
  
});