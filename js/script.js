// для блока Catalog
let catalogPainterBtn = document.querySelectorAll('.catalog__painters-btn');

catalogPainterBtn.forEach(painter => {
  painter.addEventListener('click', function(e) {

    let target = e.target;
    let targetPath = e.target.dataset.path;
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

// для блока Editions
let editionsAccordion = document.querySelector('.editions__accordion');
let accordionCategoryInput = editionsAccordion.querySelectorAll('.checkbox__input');
let categoryListDesktop = document.querySelector('.editions__category-list.desktop');
let categoryInput = categoryListDesktop.querySelectorAll('.checkbox__input');

function changeClassCategoryItem (target, name) {
  for (let input of categoryInput) {
    let parentInput = input.parentNode.parentNode;

    if (input.name === name) {
      input.checked = target.checked;
      parentInput.classList.toggle('checked');
    }
  }
};

function changeCheckedInputAccordion (target, name) {
  for (let input of accordionCategoryInput) {
    let parentTarget = target.parentNode.parentNode;

    if (input.name === name) {
      input.checked = target.checked;
      parentTarget.classList.toggle('checked');
    }
  }
}

function closeBtn (val) {
  let thisInput = val.parentNode.querySelector('.checkbox__input');
  thisInput.checked = false;

  changeCheckedInputAccordion(thisInput, thisInput.name)
}

document.addEventListener('keydown', e => {
  let target = e.target;

  let priceFilterInput = document.querySelectorAll('.price-filter__input');

  priceFilterInput.forEach(input => {
    if (input.length == 1 && target.key.match(/[^0-9'".]/)){
      return false;
    };
  });
})

function eventPriceInput (val) {
  const MIN_PRICE = + document.getElementById("from").getAttribute("placeholder").replace(/\s+/g, '');
  const MAX_PRICE = + document.getElementById("to").getAttribute("placeholder").replace(/\s+/g, '');
  let priceInputFrom = document.getElementById("from").value;
  let priceInputTo = document.getElementById("to").value;
  let regex = /[0-9]|\./;

  if (priceInputFrom === val && regex.test(val)) {
    val = val.replace(/[^\0-9]/g, '');
    document.getElementById("from").value = val;

    if (val < MIN_PRICE) {
      document.getElementById("from").value = MIN_PRICE;
    }

    if (val > MAX_PRICE) {
      document.getElementById("from").value = MAX_PRICE;
      document.getElementById("to").value = MAX_PRICE;
    }

    if (+priceInputFrom > +priceInputTo && priceInputTo !== '' && val <= MAX_PRICE) {
      document.getElementById("to").value = +priceInputFrom;
    }

    if (priceInputFrom === '') {
      document.getElementById("from").value = '';
    }
  }

  if (priceInputFrom === val && !regex.test(val)) {
    document.getElementById("from").value = '';
  }

  if (priceInputTo === val && regex.test(val)) {
    val = val.replace(/[^\0-9]/g, '');
    document.getElementById("to").value = val;

    if (val > MAX_PRICE) {
      document.getElementById("to").value = MAX_PRICE;
    }

    if (val < MIN_PRICE) {
      document.getElementById("from").value = MIN_PRICE;
      document.getElementById("to").value = MIN_PRICE;
    }

    if (+priceInputFrom > +priceInputTo && priceInputFrom !== '' && val >= MIN_PRICE) {
      document.getElementById("from").value = priceInputTo;
    }

    if (priceInputTo === '') {
      document.getElementById("to").value = '';
    }
  }

  if (priceInputTo === val && !regex.test(val)) {
    document.getElementById("to").value = '';
  }
}

function validatePriceFilterInput (evt) {
  let theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode( key );
  let regex = /[0-9]|\./;

  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

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
