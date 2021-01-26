'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////// Smooth scrolling (new-style)
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////// Nav menu scrolling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////// Tabbed components

tabContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  //active tab
  if (!clicked) return;
  //remove acyive class for tabs
  tabs.forEach(t => {
    t.classList.remove('operations__tab--active');
  });
  //remove active content area
  tabsContent.forEach(t => {
    t.classList.remove('operations__content--active');
  });
  //add active class for tab
  clicked.classList.add('operations__tab--active');

  //add active class for content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////menu fade animation

//function opacity hover effect
const handleHover = function (e) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    //choose all nav_links in parent element .nav
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    //choose all images in .nav
    const logo = link.closest('.nav').querySelector('img');

    //change opacity fo links
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    //change opacity for logo
    logo.style.opacity = this;
  }
};
//add event listener for link
console.log(nav);
nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));
