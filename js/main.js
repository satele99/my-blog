'use strict';

const addEventOnElements = (element, event, callback) => {
    for(let i = 0, len = element.length; i < len; i++){
        element[i].addEventListener(event, callback);
    }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll('[data-nav-toggler]')

const toggleNav = () => navbar.classList.toggle('active');


addEventOnElements(navTogglers, 'click', toggleNav);

// when scrolled down to 100px header is active
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove('active');
        backTopBtn.classList.remove("active");
    }
});

/**
 * SLIDER
*/

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
*/

const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;
  
    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
  
    moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);
  
/**
   * PREVIOUS SLIDE
*/
  
const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }
  
    moveSliderItem();
}
  
sliderPrevBtn.addEventListener("click", slidePrev);

window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  
    moveSliderItem();
});

