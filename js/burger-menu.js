let menuBtn = document.getElementById('header__menu-btn');
let headerMenu = document.getElementById('header__menu');
let menuItem = document.querySelectorAll('.header__item');
let accountLink = document.querySelector('.header__account-link')

menuBtn.addEventListener('click', function() {
  headerMenu.classList.toggle('is-active')

  if (headerMenu.classList.contains('is-active')) {
    document.body.style.overflow = 'hidden'
  } else document.body.style.overflowY = 'auto';
});

menuItem.forEach(item => {
  item.addEventListener('click', function() { 
    if (headerMenu.classList.contains('is-active')) {
      headerMenu.classList.remove('is-active');
      document.body.style.overflowY = 'auto';
    }
  })
})

accountLink.addEventListener('click', function() { 
    if (headerMenu.classList.contains('is-active')) {
      headerMenu.classList.remove('is-active');
      document.body.style.overflowY = 'auto';
    }
})