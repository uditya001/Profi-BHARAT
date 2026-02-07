   window.addEventListener('load', () => {
        const loader = document.getElementById('ultimate-warp-loader');
        
        // Website reveal trigger (Total 3.5s of pure magic)
        setTimeout(() => {
            loader.classList.add('exit');
            
            setTimeout(() => {
                loader.style.display = 'none';
                // Your website content entry animation can trigger here
            }, 1500);
        }, 3500);
    });









const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

/* Auto slide every 4 seconds */
setInterval(nextSlide, 4000);

/* Initial load */
showSlide(currentSlide);
/*-------------------------*/
    let rotateVal = 0;
    const carousel = document.querySelector('.carousel');

    function autoRotate() {
        rotateVal -= 90; // 4 cards hain isliye 90 degree (360/4)
        carousel.style.transform = `rotateY(${rotateVal}deg)`;
    }

    // Har 3 second mein khud ghumega
    setInterval(autoRotate, 3000);

