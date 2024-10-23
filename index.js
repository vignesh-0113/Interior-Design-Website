const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

//---------------home page----------------

const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);

// --------------about us-------------------
function onmouseovered(){
    const elem = document.getElementById("image")
    elem.style.backgroundColor = "lightgrey"
}


function mouseouter(){
    const elem = document.getElementById("image")
    elem.style.backgroundColor = "white"
}


//--------------contact----------------
function showAlert(){
    alert("Submitted Successfully")
}
 