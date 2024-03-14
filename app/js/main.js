"use strict";

window.addEventListener('DOMContentLoaded', () => {
  // Header
  const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }

  const bottomHeader = document.querySelector('.bottom-header'),
    topHeader = document.querySelector('.top-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > topHeader.offsetHeight) {
      bottomHeader.style.cssText = 'background: #fff; position: fixed;';
    } else {
      bottomHeader.style.cssText = 'background: transparent; position: static;';
    }
  });
});