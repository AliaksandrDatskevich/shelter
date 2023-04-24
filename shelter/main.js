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

//START carousel

let queue =[3, 4, 5, 6, 7];

function getRandomCustom() {
  let num = Math.floor(Math.random() * 8);
  if (queue.every(el => el !== num)) {
    queue.push(num);
    queue.shift();
    return num
  }
  return getRandomCustom()
}

let prev = document.querySelector('.button__prev');
let next = document.querySelector('.button__next');
let carousel = document.querySelector('.carousel');
let listOfPets = document.querySelectorAll('.pet-card');

let page = 50;
let group = 3;
let gap = 90;
if (document.documentElement.clientWidth < 1220) {
  group = 2;
  gap = 40;
  queue =[4, 5, 6, 7]
}
if (document.documentElement.clientWidth < 768) {
  group = 1;
  // gap = 0;
  queue =[5, 6, 7]
}
let jump = (270 + gap) * group;
let marginLeft = jump * page * group / 2;

carousel.style.marginLeft = `-${marginLeft}px`;

for (let i = 0; i < group * page * 2; i++) {
  carousel.append(listOfPets[getRandomCustom()].cloneNode(true));
}

function moveCarouselNext () {
  marginLeft += jump;
  carousel.style.marginLeft = `-${marginLeft}px`;
  page++;
  if (page > 75) {
    page = 50;
  }
}

next.addEventListener('click', moveCarouselNext);

function moveCarouselPrev () {
  marginLeft -= jump;
  carousel.style.marginLeft = `-${marginLeft}px`;
  page--;
  if (page < 0) {
    page = 50;
  }
}

prev.addEventListener('click', moveCarouselPrev);

// END carousel

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