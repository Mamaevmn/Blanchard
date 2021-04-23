let zoomModal = document.getElementById('zoom-popup');
let closeBtnModal = document.getElementById('popup__close');
let imgModal = document.getElementById('popup__img');
let authorModal = document.getElementById('popup__author');
let namePictureModal = document.getElementById('popup__name-picture');
let yearsModal = document.getElementById('popup__years');
let descModal = document.getElementById('popup__desc');
let galleryImg = document.querySelectorAll('.gallery__link-img');

galleryImg.forEach(item => {
  item.addEventListener('click', function (e) {
    let target = e.target;
    let targetSpan = target.querySelector('.hidden');
    let targetImg = target.querySelector('.gallery__img');

    document.body.style.overflow = 'hidden';
    zoomModal.style.display = 'flex';
    imgModal.src = targetImg.src;
    authorModal.innerHTML = targetSpan.getAttribute('data-author');
    namePictureModal.innerHTML = `"${targetSpan.getAttribute('data-name-picture')}"`;
    yearsModal.innerHTML = targetSpan.getAttribute('data-years');
    descModal.innerHTML = targetSpan.textContent;
  })
})

document.addEventListener('click', function (e) {
  let target = e.target;

  if (target === zoomModal || target === closeBtnModal) {
    document.getElementById('zoom-popup').style.display = 'none'
    document.body.style.overflowY = 'auto';
  }
})
