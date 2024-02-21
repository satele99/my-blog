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