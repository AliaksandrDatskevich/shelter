let body = document.querySelector('body');
let nav = document.querySelector('nav');
let navUl = document.querySelector('nav ul');
let navClass = document.querySelectorAll('.nav');
let burger = document.querySelector('.burger');

function openBurgerMenu (event) {
  if (document.documentElement.clientWidth < 768 && event.target.tagName !== 'UL') {
    event.stopPropagation();
    body.classList.toggle('burger_open');
    nav.classList.toggle('burger_open');
    navUl.classList.toggle('burger_open');
    burger.classList.toggle('burger_open');
  }
};

burger.addEventListener('click', openBurgerMenu);
nav.addEventListener('click', openBurgerMenu);

for (let element of navClass) {
  element.addEventListener('click', openBurgerMenu);
}

// END burger

// START pagination



// END pagination

// START pop-up

let petCard = document.querySelectorAll('.pet-card');
let popUp = document.querySelector('.pop-up');

function openPopUp (event) {
  if (event.target.classList.value !== 'pop-up__inner-container' && event.target.tagName !== 'P') {
    body.classList.toggle('pop-up_open');
    popUp.classList.toggle('pop-up_open');
  }
}

for (let element of petCard) {
  element.addEventListener('click', openPopUp);
}

popUp.addEventListener('click', openPopUp);

// END pop-up