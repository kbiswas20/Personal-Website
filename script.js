// Please note that this is based on a template and was created using the tutorial at the following link: https://youtu.be/UqHILyzcULE?si=HCMLj5wVke6dAE8Y

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-image');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    function updateCarousel() {
        const offset = -currentIndex * 100; // Move by 100% of the image width
        carouselImages.style.transform = `translateX(${offset}%)`;
    }
    
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel();
    });
    
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });
    
    // Optional: Auto-play functionality
    setInterval(function() {
        nextButton.click();
    }, 8000); // Change image every 8 seconds
});