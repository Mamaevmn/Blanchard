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
  let selectHeader = document.querySelectorAll('.gallery-select__header');
  let selectItem = document.querySelectorAll('.gallery-select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  })

  document.addEventListener('click', e => {
    let target = e.target;

    let selects = document.querySelectorAll('.gallery-select');

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

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.gallery-select');
    let currentText = select.querySelector('.gallery-select__current')
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
}

selectGallery ();