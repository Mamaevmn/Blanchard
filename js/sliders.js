let heroSlider = new Swiper('#hero__slider', {
  speed: 300,
  slidesPerView: 1,
  loop: true,
  wrapperClass: 'hero__swiper-wrapper',
  slideClass: 'hero__swiper-slide',
  effect: 'fade',
  grabCursor: true,
  autoplay: {
    delay: 2500,
  },
});

let gallerySlider = new Swiper('#gallery__slider', {
  speed: 300,
  wrapperClass: 'gallery__list',
  slideClass: 'gallery__item',
  navigation: {
    nextEl: '.gallery__btn.next',
    prevEl: '.gallery__btn.prev'
  },
  pagination: {
    el: '.pagination',
    type: 'fraction',
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerColumnFill: 'row',
  grabCursor: true,
  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      loop: true,
    },
  },
  a11y: {
    enable: true,
    containerMessage: 'Слайдер Галереи',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
  }
});

let eventSwiper = new Swiper('#event__slider', {
  speed: 300,
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  wrapperClass: 'events__list',
  slideClass: 'events__item',
  pagination: {
    el: '.events__pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    enable: true,
    containerMessage: 'Слайдер Событий',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Переход к слайду {{index}}'
  }
});

let editionSlider = new Swiper('#editions__slider', {
  speed: 300,
  loop: true,
  wrapperClass: 'editions__product-list',
  slideClass: 'editions__product-item',
  navigation: {
    nextEl: '.editions__product-btn.next',
    prevEl: '.editions__product-btn.prev'
  },
  pagination: {
    el: '.pagination',
    type: 'fraction',
  },
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  grabCursor: true,
  breakpoints: {
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    }
  },
  a11y: {
    enable: true,
    containerMessage: 'Слайдер Издания',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
  }
});

let partnersSlider = new Swiper ('#partners__slider', {
  wrapperClass: 'partners__list',
  slideClass: 'partners__item',
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.partners__btn.next',
    prevEl: '.partners__btn.prev'
  },
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 45,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  a11y: {
    enable: true,
    containerMessage: 'Слайдер Партнеров',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
  }
})

let projectLartnersList = document.querySelector('.partners__list')

projectLartnersList.addEventListener('mouseenter', function(e) {
  partnersSlider.autoplay.stop();
});

projectLartnersList.addEventListener('mouseleave', function(e) {
  partnersSlider.autoplay.start();
})