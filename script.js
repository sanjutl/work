const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
const totalImages = images.length;
const intervalTime = 3000;  // Time interval in milliseconds (3 seconds)
let autoPlay;

// Function to show the image at the current index
function showImageAtIndex() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Function to go to the next image (slide left to right)
function nextImage() {
    index = (index - 1 + totalImages) % totalImages;
    showImageAtIndex();
}

// Autoplay functionality (sliding left to right by default)
function startAutoPlay() {
    autoPlay = setInterval(nextImage, intervalTime); // Automatically slide left to right
}

// Stop autoplay when user interacts (e.g., clicks a button)
function stopAutoPlay() {
    clearInterval(autoPlay);
}

// Start autoplay when the page loads
startAutoPlay();

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    index = (index - 1 + totalImages) % totalImages;
    showImageAtIndex();
    startAutoPlay(); // Restart autoplay after manual navigation
});

prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    index = (index + 1) % totalImages;
    showImageAtIndex();
    startAutoPlay(); // Restart autoplay after manual navigation
});



document.addEventListener("DOMContentLoaded", function() {
    // Simulate content loading with a delay
    let loader=document.getElementById("load");
    setTimeout(function() {
        loader.classList.add('hidden');
    },3000); // 3-second delay to simulate loading
});