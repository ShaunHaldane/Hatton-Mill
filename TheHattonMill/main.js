const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".header-images", { opacity: 0 }, { opacity: 1, duration: 1 });

///////////////// Responsive Navbar

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}
navSlide();

///////////////// End of Responsive navbar


// //////Entertainment Carousel//////////////////////

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter = counter + 100;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = "translateX(-" + counter + "%)";
});

prevBtn.addEventListener('click', () => {
    counter = counter - 100;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = "translateX(-" + counter + "%)";
});
