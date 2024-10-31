

let tags = document.querySelectorAll('.lazy-tags');
let lazyimg = document.querySelectorAll('.lazy-loading');

tags.forEach((tag, index) => {
  tag.addEventListener('mouseover', function (event) {
    lazyimg.forEach(img => {
      img.classList.remove('active');
      void img.offsetWidth; 
    });
    tags.forEach(img => {
        img.classList.remove('active');
      });
      tags[index].classList.add('active');
    lazyimg[index].classList.add('active');
  });
});


// const target = document.querySelector('.section-2');
// const bgcontainer=document.querySelector('.sub-container');


// const options = {
//   root: null, // Observe relative to the viewport
//   rootMargin: '0px', // Margin around the root (e.g., "0px 0px -10% 0px")
//   threshold: 0.3 // Trigger when 50% of the target is visible
// };

// // Create an Intersection Observer
// const observer = new IntersectionObserver((entries)=>{
//    entries.forEach((entry)=>{
//     if (entry.isIntersecting){
//       bgcontainer.style.backgroundColor='pink'
      
//     }else{
//       bgcontainer.style.backgroundColor='transparent'
//     }
//    })
// },options);

// observer.observe(target);

const bgcontainer=document.querySelector('.sub-container');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX; 
  const firstcolorChange=250;
  const secondcolorChange=2300;
  if(scrollTop>firstcolorChange){
     bgcontainer.style.backgroundColor='rgb(217, 208, 208)'
  }
  else{
    bgcontainer.style.backgroundColor='rgb(169, 177, 171)'
  }
  if(scrollTop>secondcolorChange){
    bgcontainer.style.backgroundColor='rgb(244, 243, 239)'
 }
  
});