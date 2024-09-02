
document.addEventListener('DOMContentLoaded', function() {
  const carouselRow = document.querySelector('.carousel');
  const carouselSlides = document.getElementsByClassName('carousel-items');
 
  let index = 1;
  let width = carouselSlides[0].clientWidth;

  
  carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';

  
  function previousSlide() {
      if (index <= 0) return;
      carouselRow.style.transition = 'transform 1s ease-in-out';
      index--;
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


  document.addEventListener('DOMContentLoaded', function() {
    const pagecarouselRow = document.querySelector('.pagecarousel');
    const pagecarouselSlides = document.getElementsByClassName('pagecarousel-items');
    const previous = document.querySelector('.left');
    const next = document.querySelector('.right');
    const mainContainer=document.querySelector('.pagecontainer')
   
    let index = 1;
    let width = pagecarouselSlides[0].clientWidth;
  
    
    pagecarouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
  
    
    function previousSlide() {
        if (index <= 0) return;
        pagecarouselRow.style.transition = 'transform 1s ease-in-out';
        index--;
        pagecarouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
    }
    function forwardSlide() {
        if (index >= pagecarouselSlides.length - 1) return;
        pagecarouselRow.style.transition = 'transform 1s ease-out';
        index++;
        pagecarouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
    }
   
    pagecarouselRow.addEventListener('transitionend', function() {
        if (pagecarouselSlides[index].id === 'pagefirst') {
            pagecarouselRow.style.transition = 'none';
            index = pagecarouselSlides.length - index;
            pagecarouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
        }
        if (pagecarouselSlides[index].id === 'pagelast') {
            pagecarouselRow.style.transition = 'none';
            index = pagecarouselSlides.length - 2;
            pagecarouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
        }
    });
  
    function autoSlide(){
        deleteInterval=setInterval(time,1500);
        function time(){
            forwardSlide()
        }
    }
    autoSlide()
    
    previous.addEventListener('click', previousSlide);
    next.addEventListener('click', forwardSlide);
  });
  
  