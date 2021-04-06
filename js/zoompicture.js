let zoomModal = document.getElementById('zoom-popup');
let closeBtnModal = document.getElementById('popup__close');
let imgModal = document.getElementById('popup__img');
let descModal = document.getElementById('popup__desc');
let galleryImg = document.querySelectorAll('.gallery__link-img');

galleryImg.forEach(item => {
  item.addEventListener('click', function (e) {
    let target = e.target;
    let targetImg = target.querySelector('.gallery__img');

    document.body.style.overflow = 'hidden';
    zoomModal.style.display = 'flex';
    imgModal.src = targetImg.src;
    descModal.innerHTML = targetImg.alt;
  })
})

document.addEventListener('click', function (e) {
  let target = e.target;

  if (target === zoomModal || target === closeBtnModal) {
    document.getElementById('zoom-popup').style.display = 'none'
    document.body.style.overflowY = 'auto';
  }
})