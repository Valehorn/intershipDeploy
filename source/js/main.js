import { burgerMenuToggle } from './burger-menu';
import { initSwiperHero } from './hero-swiper';
import './modal';
import './modal-select';
import './form-select';
import './select-labels';
import './form-submit';
import './modal-form-submit';
import initSwiperPrograms from './programs-swiper';
import tabsToggle from './news-tab';
import initSwiperNews from './news-swiper';
import { toggleFaqAccordion } from './faq-accordion';
import initSwiperReviews from './reviews-swiper';

const bootStrap = () => {
  burgerMenuToggle();
  initSwiperHero();
  initSwiperPrograms();
  tabsToggle();
  initSwiperNews();
  toggleFaqAccordion();
  initSwiperReviews();
};

bootStrap();
