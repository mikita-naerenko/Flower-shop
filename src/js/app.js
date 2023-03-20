import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

});


var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var MainNavItemDelivery = document.querySelector('.main-nav__item--delivery');
const mediaQuery = window.matchMedia('(min-width: 768px)');
var modal = document.querySelector('.modal');
var productWeekButton = document.querySelector('.product-week__button');
var modalFade = document.querySelector('.modal__fade');

// navMain.classList.remove('main-nav--nojs');

document.addEventListener('DOMContentLoaded', (event) => {
  if (window.innerWidth > 768) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened')
  }
});

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')
  ) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
window.addEventListener('resize', function(){
 if(window.innerWidth > 768) {
  navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
 } else {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
 }
});

productWeekButton.addEventListener('click', function() {
  if (modal.classList.contains('modal--closed')
   ) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--open');
}
});

modalFade.addEventListener('click', function() {
  if (modal.classList.contains('modal--open')) {
    modal.classList.remove('modal--open');
    modal.classList.add('modal--closed');
  }

});

document.querySelector('.modal').querySelector('button').addEventListener('click', function(){

  if (modal.classList.contains('modal--open')) {
    modal.classList.remove('modal--open');
    modal.classList.add('modal--closed');
  }
});