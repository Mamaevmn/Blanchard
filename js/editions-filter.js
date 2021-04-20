let editionsAccordion = document.querySelector('.editions__accordion');
let accordionCategoryInput = editionsAccordion.querySelectorAll('.checkbox__input');
let categoryListDesktop = document.querySelector('.editions__category-list.desktop');
let categoryInputDesktop = categoryListDesktop.querySelectorAll('.checkbox__input');
let priceFilterInput = document.querySelectorAll('.price-filter__input');

accordionCategoryInput.forEach(category => {
  category.addEventListener('click', e => {
    let target = e.target;

    changeClassCategoryItem(target, target.name)
  })
})

function changeClassCategoryItem (target, name) {
  for (let input of categoryInputDesktop) {
    let parentInput = input.parentNode.parentNode;

    if (input.name === name) {
      input.checked = target.checked;
      parentInput.classList.toggle('checked');
    }
  }
};

categoryInputDesktop.forEach(category => {
  category.addEventListener('click', e => {
    let target = e.target;
    changeCheckedInputAccordion(target, target.name)
  })
})

function changeCheckedInputAccordion (target, name) {
  for (let input of accordionCategoryInput) {
    let parentTarget = target.parentNode.parentNode;

    if (input.name === name) {
      input.checked = target.checked;
      parentTarget.classList.toggle('checked');
    }
  }
}

priceFilterInput.forEach(input => {
  input.addEventListener('change', e => {
    let target = e.target.value;
    eventPriceInput(target)
  })
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
