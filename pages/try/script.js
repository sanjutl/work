    const wrapper = document.querySelector(".wrapper");
    const slides = Array.from(wrapper.children);
    let index=0
    let margin=10
    function updateImg(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        }
    )   
    slides[index].classList.add('active')
    slidewidth=slides[0].getBoundingClientRect().width
    console.log(slidewidth);
    
        wrapper.style.transform=`translate3d(-${index * slidewidth+margin}px,0px, 0px)`
        index=(index+1)%slides.length;
        if(index==5){
            clearInterval(interval)
        }
    }

    let interval=setInterval(updateImg,3000)