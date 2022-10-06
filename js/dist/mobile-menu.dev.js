"use strict";

(function () {
  var mobileMenu = document.querySelector('.js-menu-container');
  var openMenuBtn = document.querySelector('.js-open-menu');
  var closeMenuBtn = document.querySelector('.js-close-menu');

  var toggleMenu = function toggleMenu() {
    mobileMenu.classList.toggle('mobile-menu--is-open');
    document.body.classList.toggle('modal-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu); // Close the mobile menu on wider screens if the device orientation changes

  window.matchMedia('(min-width: 768px)').addEventListener('change', function (e) {
    if (!e.matches) return;
    mobileMenu.classList.remove('mobile-menu--is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();