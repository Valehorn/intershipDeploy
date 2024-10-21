import Swiper from 'swiper/bundle';
import 'swiper/scss';

const programsSwiperContainer = document.querySelector('.programs__swiper');

const initSwiperPrograms = () => {
  const programsSwiper = new Swiper(programsSwiperContainer, {
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    scrollbar: {
      el: '.programs__swiper-scrollbar',
    },
    navigation: {
      nextEl: '.programs__swiper-button-next',
      prevEl: '.programs__swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.13,
        spaceBetween: 30,
        dragSize: 326,
        scrollbar: {
          draggable: true,
          dragEffect: 'slide',
        }
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
        dragSize: 394,
        scrollbar: {
          draggable: true,
          dragEffect: 'slide',
        }
      },
    },
  });
  programsSwiper.on('init', () => {
    updateTabIndex(programsSwiper);
  });

  programsSwiper.on('slideChange', () => {
    updateNavigationButtons(programsSwiper);
    updateTabIndex(programsSwiper);
  });

  programsSwiper.on('slideNextTransitionStart', () => {
    updateNavigationButtons(programsSwiper);
  });

  programsSwiper.on ('scrollbarDragEnd', () => {
    updateNavigationButtons(programsSwiper);
  });

  function updateTabIndex(swiperSlide) {
    const slides = swiperSlide.slides;
    const activeIndex = swiperSlide.activeIndex;

    slides.forEach((slide, index) => {
      const slideButtons = slide.querySelectorAll('.programs__slide-link');
      if (slideButtons.length > 0) {
        if (index === activeIndex) {
          slideButtons.forEach((button) => {
            button.removeAttribute('tabindex');
          });
        } else {
          slideButtons.forEach((button) => {
            button.setAttribute('tabindex', '-1');
          });
        }
      }
    });
  }

  updateNavigationButtons(programsSwiper);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.programs__swiper-button-prev');
    const nextButton = document.querySelector('.programs__swiper-button-next');

    if (swiper.isBeginning) {
      prevButton.classList.add('swiper-button--disabled');
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove('swiper-button--disabled');
      prevButton.disabled = false;
    }

    if (swiper.isEnd) {
      nextButton.classList.add('swiper-button--disabled');
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove('swiper-button--disabled');
      nextButton.disabled = false;
    }
  }
};

export default initSwiperPrograms;
