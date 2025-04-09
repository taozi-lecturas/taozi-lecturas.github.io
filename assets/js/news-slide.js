document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    let index = 0;
  
    function nextSlide() {
      index++;
      if (index >= slides.children.length) {
        index = 0;
      }
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    setInterval(nextSlide, 4000); // Cambia cada 3 segundos
  });
  