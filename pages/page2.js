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