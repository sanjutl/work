// script.js

function toggleExpand(item) {
    const expanded = item.classList.contains('expanded');
    
    // Collapse all other items
    document.querySelectorAll('.item').forEach((el) => el.classList.remove('expanded'));
    
    // Expand the clicked item if it was not already expanded
    if (!expanded) {
        item.classList.add('expanded');
    }
}



let header = document.querySelector(".nav");
let mobHeader = document.querySelector(".mob-header");

function logScreenDimensions() {
  let a = window.innerWidth;


  if (a <= 1024) {
    header.style.display = "none";
    mobHeader.style.display = "flex";
  } else {
    header.style.display = "block";
    mobHeader.style.display = "none";
  }
}

logScreenDimensions();
window.addEventListener("resize", logScreenDimensions);

let navItem = document.querySelector(".nav-contents");
let isHidden = false;

function toggleDisplay() {
  const element = document.querySelector(".nav-contents");
  if (!isHidden) {
    element.classList.add("active");
    isHidden = true;
  } else {
    element.classList.remove("active");
    isHidden = false;
  }
}
function showSubNav() {
  const svgItem = document.getElementById("svg");
  const element = document.querySelector(".sub-dropdown");
  if (!isHidden) {
    element.classList.add("active");
    isHidden = true;
    svgItem.style.transform = "rotate(90deg)";
  } else {
    element.classList.remove("active");
    isHidden = false;
    svgItem.style.transform = "rotate(0deg)";
  }
}



