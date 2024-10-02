$('document').ready(function(){
  //type js
  var typed = new Typed('#element', {
    strings: ['<h1>Welcome to My Website</h1>', '<h1> Bienvenidos a mi sitio web</h1>', '<h1> Bienvenue sur mon site</h1>', '<h1> Velkommen til Min hjemmeside</h1>', '<h1> 私のウェブサイトへようこそ</h1>', '<h1> 欢迎来到我的网站</h1>', '<h1> مرحبا بكم في موقع الويب الخاص بي</h1>', '<h1> Willkommen auf meiner Website</h1>', '<h1> 내 웹 사이트에 오신 것을 환영합니다</h1>'],
    typedSpeed: 50,
    loop: true,
  })
   
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

