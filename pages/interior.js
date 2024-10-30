

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

