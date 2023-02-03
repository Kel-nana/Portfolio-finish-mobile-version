// =======SELECTORS========

const menu = document.querySelector('.bars');
const slideIn = document.querySelector('.header-desktop');
const close = document.querySelector('.fa-xmark');
const bottomLine = document.querySelector('.bottom_line');
const menuLink = document.querySelectorAll('.menu_link');

// ==========OPEN MENU===============
menu.addEventListener('click', ()=> {
    slideIn.style.width ='100vw';
    bottomLine.style.display ='block';
    close.style.display ='block';
    menuLink.forEach(element => {
        element.style.display ='block';
    });
});

// =============CLOSE MENU=============
close.addEventListener('click', ()=> {
    slideIn.style.width ='0';
    bottomLine.style.display ='none';
    close.style.display ='none';
    menuLink.forEach(element => {
        element.style.display ='none';
    });
});




/* <script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} */