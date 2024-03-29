/*Nav hamburger menu*/
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navToggle = document.querySelector(".menu-parts");
const stripHorz = document.querySelector(".hamburger-stripe");
const navBar = document.querySelector(".nav-bar");

hamburgerMenu.addEventListener('click', e => {
    navToggle.classList.toggle('menu-active');
    stripHorz.classList.toggle('stripe-active');
    stripHorz.classList.toggle('hamburger-stripe');
    navBar.classList.toggle('nav-bar');
});

/*Art page JS*/
/*Art 0*/
const standoutBtnZero = document.querySelector("#standout-btn-0");
const standoutArtZero = document.querySelector("#standout-0");
const imageArtZero = document.querySelector("#art-0");

if (imageArtZero) {
    imageArtZero.addEventListener('click', e => {
        standoutBtnZero.classList.toggle('hide-button');
        standoutArtZero.classList.toggle('hide-standout');
    })
};

if (standoutBtnZero) {
    standoutBtnZero.addEventListener('click', e => {
        standoutBtnZero.classList.toggle('hide-button');
        standoutArtZero.classList.toggle('hide-standout');
    })
};

/*Art 1*/
const standoutBtnOne = document.querySelector("#standout-btn-1");
const standoutArtOne = document.querySelector("#standout-1");
const imageArtOne = document.querySelector("#art-1");
// const bgDark = document.querySelector("#bg-dark-01"); /*Note: modal*/

if (imageArtOne) {
    imageArtOne.addEventListener('click', e => {
        standoutBtnOne.classList.toggle('hide-button');
        standoutArtOne.classList.toggle('hide-standout');
    })
};

if (standoutBtnOne) {
    standoutBtnOne.addEventListener('click', e => {
        standoutBtnOne.classList.toggle('hide-button');
        standoutArtOne.classList.toggle('hide-standout');
    })
};

/*Art 2*/
const standoutBtnTwo = document.querySelector("#standout-btn-2");
const standoutArtTwo = document.querySelector("#standout-2");
const imageArtTwo = document.querySelector("#art-2");

if (imageArtTwo) {
    imageArtTwo.addEventListener('click', e => {
        standoutBtnTwo.classList.toggle('hide-button');
        standoutArtTwo.classList.toggle('hide-standout');
    })
};

if (standoutBtnTwo) {
    standoutBtnTwo.addEventListener('click', e => {
        standoutBtnTwo.classList.toggle('hide-button');
        standoutArtTwo.classList.toggle('hide-standout');
    })
};

/*Art 3*/
const standoutBtnThree = document.querySelector("#standout-btn-3");
const standoutArtThree = document.querySelector("#standout-3");
const imageArtThree = document.querySelector("#art-3");

if (imageArtThree) {
    imageArtThree.addEventListener('click', e => {
        standoutBtnThree.classList.toggle('hide-button');
        standoutArtThree.classList.toggle('hide-standout');
    })
};

if (standoutBtnThree) {
    standoutBtnThree.addEventListener('click', e => {
        standoutBtnThree.classList.toggle('hide-button');
        standoutArtThree.classList.toggle('hide-standout');
    })
};

/*Art 4*/
const standoutBtnFour = document.querySelector("#standout-btn-4");
const standoutArtFour = document.querySelector("#standout-4");
const imageArtFour = document.querySelector("#art-4");

if (imageArtFour) {
    imageArtFour.addEventListener('click', e => {
        standoutBtnFour.classList.toggle('hide-button');
        standoutArtFour.classList.toggle('hide-standout');
    })
};

if (standoutBtnFour) {
    standoutBtnFour.addEventListener('click', e => {
        standoutBtnFour.classList.toggle('hide-button');
        standoutArtFour.classList.toggle('hide-standout');
    })
};

/*Art 5*/
const standoutBtnFive = document.querySelector("#standout-btn-5");
const standoutArtFive = document.querySelector("#standout-5");
const imageArtFive = document.querySelector("#art-5");

if (imageArtFive) {
    imageArtFive.addEventListener('click', e => {
        standoutBtnFive.classList.toggle('hide-button');
        standoutArtFive.classList.toggle('hide-standout');
    })
};

if (standoutBtnFive) {
    standoutBtnFive.addEventListener('click', e => {
        standoutBtnFive.classList.toggle('hide-button');
        standoutArtFive.classList.toggle('hide-standout');
    })
};
