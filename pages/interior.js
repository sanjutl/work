//nav
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