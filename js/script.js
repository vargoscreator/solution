
let bodyclick = document.querySelector('.body');
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let header__overlay = document.querySelector('.header__overlay');
let header__list = document.querySelector('.header__menu-list');
let header = document.querySelectorAll('.header');
const headerMenuBlock = document.querySelector(".header__menu-block");
header__burger.onclick = function(){
  changeClass();
}
header__overlay.onclick = function(){
  changeClass();
}
function changeClass(){
    bodyclick.classList.toggle('lock');
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    header__overlay.classList.toggle('lock');
    if(headerMenuBlock.classList.contains('active')){
      headerMenuBlock.classList.toggle("active");
    }
}
function handleScroll() {
  const header = document.querySelector('.header');
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY >= 130) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleScroll);
function nameSurnameInput(input) {
  input.value = input.value.replace(/[^a-zA-Z]/g, '');
}
function phoneInput(input) {
  input.value = input.value.replace(/[^\d]/g,'');
}
function emailInput(input) {
  input.value = input.value.replace(/[^a-zA-Z0-9@.]/g, '');
}

function sendForm(){
  event.preventDefault();
  const emailInputElement = document.querySelector('#tellus__form input[name=Email]');
  const phoneInputElement = document.querySelector('#tellus__form input[name=Phone]');
  const email = emailInputElement.value.trim();
  const emailLabel = document.getElementById('emailLabel');
  const validateEmail = (email) => {
      return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };       
  let isError = false
  if (phoneInputElement) {
    const phone = phoneInputElement.value;
    const phoneLength = phoneInputElement.value.length;
    const phoneLabel = document.getElementById('phoneLabel');
    if (phoneLength < 5 || phoneLength > 15){
      console.log('Phone неверный:', phone);
      phoneLabel.style.color = 'red';
      isError = true
    } else {
      console.log('Phone верный:', phone);
      phoneLabel.style.color = '#333';
    }   

  }
  if (validateEmail(email)) {
      console.log('Email верный:', email);
      emailLabel.style.color = '#333';
  } else {
      console.log('Email неверный:', email);
      emailLabel.style.color = 'red';
      isError = true
  }
  if(isError){
      return
  }
    
}


document.addEventListener("DOMContentLoaded", function () {
  const menuItem = document.querySelectorAll(".header__menu-item")[2];
  const headerInner = document.querySelector(".header");
  const updateHeaderHeight = () => {
    const scrollWidth = document.documentElement.scrollWidth;
    if (scrollWidth > 1033){
      let bodyclick = document.querySelector('.body');
      if(bodyclick.classList.contains('lock')){
        changeClass()
      }

    }
    if (scrollWidth <= 1366 && scrollWidth > 400) {
      headerInner.style.height = "81px";
    }
    if (scrollWidth <= 500) {
      headerInner.style.height = "60px";
    }
    if (scrollWidth > 1366) {
      headerInner.style.height = "96px";
    }
  };

  const handleMenuItemMouseOver = () => {
    const scrollWidth = document.documentElement.scrollWidth;
    if (scrollWidth <= 1366) {
      headerInner.style.height = "110px";
    }
    if (scrollWidth > 1366) {
      headerInner.style.height = "115px";
    }
  };
  const handleMenuItemMouseOut = () => {
    updateHeaderHeight();
  };
  const handleMenuItemClick = () => {
    const scrollWidth = document.documentElement.scrollWidth;
    if (scrollWidth <= 1333) {
      headerMenuBlock.classList.toggle("active");
    }
  };
  menuItem.addEventListener("mouseover", handleMenuItemMouseOver);
  menuItem.addEventListener("mouseout", handleMenuItemMouseOut);
  menuItem.addEventListener("click", handleMenuItemClick);
  window.addEventListener("resize", updateHeaderHeight);
  updateHeaderHeight();
});

