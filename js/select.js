let selectHeader = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectClose)
  })

  document.addEventListener('click', e => {
    let target = e.target;
    let selects = document.querySelectorAll('.select');

    selects.forEach(select => {
      let itsSelect = target == select || select.contains(target) ;

      let selectIsActive = select.classList.contains('is-active');

      if (!itsSelect  && selectIsActive) {
        select.classList.remove('is-active');
      }
    });
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectClose() {
    let select = this.closest('.select');
    select.classList.remove('is-active');
  }
}

selectHeader ();

let selectGallery = function () {
  let select = document.querySelector('.gallery-select');
  let gallerySelectHeader = document.querySelector('.gallery-select__header');
  let gallerySelectItem = document.querySelectorAll('.gallery-select__item');
  let originalHeaderText = select.querySelector('.gallery-select__current').innerText;

  gallerySelectHeader.addEventListener('click', selectToggle);

  gallerySelectItem.forEach(item => {
    item.addEventListener('click', selectClose)
  })

  document.addEventListener('click', e => {
    let target = e.target;

    let itsSelect = target == select || select.contains(target);
    let selectIsActive = select.classList.contains('is-active');

    if (!itsSelect  && selectIsActive) {
      select.classList.remove('is-active');
    }
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectClose() {
    let text = this.innerText;
    let currentText = select.querySelector('.gallery-select__current');

    currentText.innerText = text;
    this.querySelector('.gallery-select__item-link').innerText = originalHeaderText;
    originalHeaderText = text;
    select.classList.remove('is-active');
  }
}

selectGallery ();
