

let allDiv=document.querySelectorAll('.con2-imgdiv')
console.log(allDiv)
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