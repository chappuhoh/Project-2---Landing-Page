/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// holds the list of sections
const sections = document.querySelectorAll('section');

// holds the navbar menu
const navbar__menu = document.querySelectorAll('navbar__menu');

// navigation const global variable
const navList = document.getElementById('#navbar__list');

// builds out the nav
const nav__items = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

// holds the active section, not a const as it will be overwritten depending on section
let activeSection = document.querySelector('.active-section');



function addListeners(navList) {
    navList.addEventListener('click', onNavClick);
}

function onNavClick(event) {
    const section = document.querySelector(`#${event.target.dataset.id}`);
    section.scrollIntoView({behavior: 'smooth'});
}


// build the nav

nav__items.forEach((nav__item, i) => {
  const el = document.createElement('a');
  el.innerText = nav__item;
  el.classList.add('nav__items');
  el.setAttribute('id', `menu__${i + 1}`);
  el.href = `#section${i + 1}`;
  navbar__list.appendChild(el);
  
});


// Add class 'active' to section when near top of viewport

// returns element and its position relative to the viewport. In this case it is <= number
const offset = function(section) {
    return Math.floor(section.getBoundingClientRect().top);
};

// removes the active class
const removeActive = function(section) {
    section.classList.remove('active-section');
    section.style.cssText = 'text-decoration: none';
    };

// adding the active class
const addActive = function (condition, section) {
    if(condition){
        section.classList.add('active-section');
        section.style.cssText = 'text-decoration: underline ; background-color: orange';
    };
};

// implementing the function

const sectionActivation = function () {
    sections.forEach(section => {
            const elementChange = offset (section);
            inviewport = () => elementChange < 500 && elementChange >= -500;
            removeActive(section);
            addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);
