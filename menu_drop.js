/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// =======SELECTORS========
const menu = document.querySelector('.bars');
const slideIn = document.querySelector('.header-desktop');
const close = document.querySelector('.fa-xmark');
const bottomLine = document.querySelector('.bottom_line');
const menuLink = document.querySelectorAll('.menu_link');

// ==========OPEN MENU===============
menu.addEventListener('click', () => {
  slideIn.style.width = '100vw';
  bottomLine.style.display = 'block';
  close.style.display = 'block';
  menuLink.forEach((elementz) => {
    elementz.style.display = 'block';
  });
});

// =============CLOSE MENU=============
close.addEventListener('click', () => {
  slideIn.style.width = '0';
  bottomLine.style.display = 'none';
  close.style.display = 'none';
  menuLink.forEach((elementz) => {
    elementz.style.display = 'none';
  });
});

// ========BACKGROUND CLOSE==============
slideIn.addEventListener('click', () => {
  slideIn.style.width = '0';
  bottomLine.style.display = 'none';
  close.style.display = 'none';
  // eslint-disable-next-line arrow-parens
  menuLink.forEach((elementz) => {
    elementz.style.display = 'none';
  });
});

const slide = 5;