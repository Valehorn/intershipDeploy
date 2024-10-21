import { isEscapeKey } from './utils';

const body = document.querySelector('.page-body');
const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__button-menu');

const openMenu = () => {
  body.classList.add('page-body--burger-menu-open');
  nav.classList.add('header__nav--open');
  document.addEventListener('keydown', onDocumentKeyDown);
  document.addEventListener('click', onDocumentClick);
};

const closeMenu = () => {
  if (body.classList.contains('page-body--burger-menu-open')) {
    body.classList.remove('page-body--burger-menu-open');
    nav.classList.remove('header__nav--open');
    document.removeEventListener('keydown', onDocumentKeyDown);
    document.removeEventListener('click', onDocumentClick);
  }
};

const toggleMenu = () => {
  const isMenuOpen = body.classList.contains('page-body--burger-menu-open');
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onBurgerButtonClick = () => {
  toggleMenu();
};

function onDocumentKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

function onDocumentClick(evt) {
  const isClickNav = evt.target.closest('.header__nav');
  const isClickBurgerButton = evt.target.closest('.header__button-menu');
  if (!isClickNav && !isClickBurgerButton) {
    closeMenu();
  }
}

const onNavButtonClick = (evt) => {
  const button = evt.target.closest('.header__nav-button');
  if (!button) {
    return;
  }
  const parentItem = button.closest('.header__nav-item');
  const subList = parentItem.querySelector('.header__nav-sub-list');

  if (subList) {
    if (subList.style.height && subList.style.height !== '0px') {
      subList.style.height = '0px';
      subList.style.visibility = 'hidden';
      button.style.marginBottom = '0';
      button.style.setProperty('--transform-rotate-item', '0deg');
      button.classList.remove('header__nav-button--current');
    } else {
      subList.style.height = `${subList.scrollHeight}px`;
      subList.style.visibility = 'visible';
      button.style.marginBottom = '16px';
      button.style.setProperty('--transform-rotate-item', '180deg');
      button.classList.add('header__nav-button--current');
    }
  }
};

nav.addEventListener('click', onNavButtonClick);

const burgerMenuToggle = () => {
  burgerButton.addEventListener('click', onBurgerButtonClick);
};

export { burgerMenuToggle };
