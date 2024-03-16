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

  // dropMenu
  let arrows = document.querySelectorAll('.menu__arrow');
  arrows.forEach(arrow => {
    let subMenu = arrow.nextElementSibling;

    arrow.addEventListener('click', function () {
      subMenu.classList.toggle('open');
      arrow.classList.toggle('active');
    });
  });

  // Tabs
  function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector),
      tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
      tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
        item.classList.remove(activeClass);
      })
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains(tabsSelector.slice(1))) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  tabs('.header-tab-services__item', '.content-tab-services__items', '.header-tab-services__items', 'header-tab-services__item_active');
});