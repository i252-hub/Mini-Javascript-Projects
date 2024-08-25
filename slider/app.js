// Select elements
const theSlide = document.querySelectorAll('.slide'); 
const next = document.querySelector('.nextBtn');
const prev = document.querySelector('.prevBtn');
let currentIndex = 0; 

function showSlide(index) {
    theSlide.forEach(slide => {
        slide.style.opacity = 0; 
    });
    
    theSlide[index].style.opacity = 1; 
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % theSlide.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + theSlide.length) % theSlide.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);

next.addEventListener('click', showNextSlide);
prev.addEventListener('click', showPrevSlide);
