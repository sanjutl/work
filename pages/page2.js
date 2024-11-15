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














let imageItems=document.querySelectorAll(".section-4-image-wrapper")


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



