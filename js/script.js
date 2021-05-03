// для блока Header и Hero

let menuLinkItem = document.querySelectorAll('.header__item-link, .hero__subscribe-btn');

menuLinkItem.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.hash).scrollIntoView();
  })
})

// для блока Catalog
let catalogPainterBtn = document.querySelectorAll('.catalog__painters-btn');

catalogPainterBtn.forEach(painter => {
  painter.addEventListener('click', function(e) {
    let target = e.target;
    let targetPath = e.target.dataset.path;

    let windowWidth = document.documentElement.clientWidth;

    let catalogPaintersItemArray = target.closest('.catalog__painters-list').children;
    let activeLangBlock = document.querySelector('.catalog__lang-block.is-active');
    let activeCatalogBiographyItem = activeLangBlock.querySelectorAll('.catalog__biography-item');

    for (let item of catalogPaintersItemArray) {
      let btnItem = item.querySelector('.catalog__painters-btn');

      if (btnItem.classList.contains('is-active')) {
        btnItem.classList.remove('is-active');
      }
    }

    activeCatalogBiographyItem.forEach(bioItem => {
      bioItem.classList.remove('is-active');
    });

    target.classList.add('is-active');
    document.querySelector(`[data-target="${targetPath}"]`).classList.add('is-active');

    if (windowWidth <= 767) {
      document.querySelector(`[data-target="${targetPath}"]`).scrollIntoView({behavior: "smooth"});
    }
  })
})

// для блока Event
let eventBtn = document.querySelector('.events__allevents-btn');
let eventItem = document.querySelectorAll('.events__item');

(function () {
  let sizeWindow = [window.innerWidth];

  if (sizeWindow >= 768 && sizeWindow <= 1023) {
    eventItem[2].classList.remove('is-active')
  }
})();

eventBtn.addEventListener('click', function() {
  eventBtn.style.display = "none";

  for (let item of eventItem) {
    if (!item.classList.contains('is-active')) {
      item.classList.add('is-active')
    }
  }
});

window.addEventListener('resize', function() {
  let resizeWindow = [window.innerWidth];

  if (resizeWindow > 767) {
    if (resizeWindow >= 1024 && !eventItem[2].classList.contains('is-active') && (eventBtn.style.display = "block")) {
      eventItem[2].classList.add('is-active');
    }

    if (!(resizeWindow < 768) && resizeWindow >= 768 && eventItem[3].classList.contains('is-active') && (eventBtn.style.display = "none")) {
      for (let item in eventItem) {
        if (item > 2) {
          eventItem[item].classList.remove('is-active')

          eventBtn.style.display = "block";
        }
      }
    }

    if (resizeWindow >= 768 && resizeWindow < 1024 && eventItem[2].classList.contains('is-active') && (eventBtn.style.display = "none")) {
      for (let item in eventItem) {
        if (item > 1) {
          eventItem[item].classList.remove('is-active')

          eventBtn.style.display = "block";
        }
      }
    }
  }
});

// для блока Projects
let tooltip = document.querySelectorAll('.tooltip');

tooltip.forEach(tooltip => {
  let tooltipMarker = tooltip.querySelector('.tooltip__marker');
  let tooltipPopup = tooltip.querySelector('.tooltip__popup');

  let newPopper = Popper.createPopper(tooltipMarker, tooltipPopup, {
    placement: 'top',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['left', 'right', 'bottom'],
        },
      },
    ],
  });

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  function show() {
    tooltipPopup.setAttribute('data-show', '');
    newPopper.update();
  }

  function hide() {
    tooltipPopup.removeAttribute('data-show');
  }

  showEvents.forEach(event => {
    tooltipMarker.addEventListener(event, show);
  });

  hideEvents.forEach(event => {
    tooltipMarker.addEventListener(event, hide);
  });
});

// для модальных окон
let okBtn = document.querySelectorAll('.modal__ok-btn');

function errorModal () {
  let errorModal = document.getElementById('error-modal');

  errorModal.classList.add('is-active');
  disableScroll()
}

okBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
    let target = e.target;

    target.closest('.modal').classList.remove('is-active');
    enableScroll();
  })
})
