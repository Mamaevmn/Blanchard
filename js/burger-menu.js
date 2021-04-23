let menuBtn = document.getElementById('header__menu-btn');
let headerMenu = document.getElementById('header__menu');
let menuItem = document.querySelectorAll('.header__item-link');
let accountLink = document.querySelector('.header__account-link');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('is-active');

  if (menuBtn.classList.contains('is-active')) {
    headerMenu.classList.add('is-active');
  } else {
    headerMenu.classList.remove('is-active');
  };

  window.addEventListener('scroll', function() {
    if ((headerMenu.offsetHeight - document.documentElement.clientHeight)*2 < window.scrollY) {
      headerMenu.classList.remove('is-active');
      menuBtn.classList.remove('is-active');
    }
  })

  document.addEventListener('click', function(e) {
    let target = e.target;
    const its_menu = target == headerMenu || headerMenu.contains(target);
    const its_btnMenu = target == menuBtn;
    const menu_is_active = headerMenu.classList.contains('is-active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
      headerMenu.classList.remove('is-active');
      menuBtn.classList.remove('is-active');
    }
  })
});

menuItem.forEach(item => {
  item.addEventListener('click', function() {
    if (headerMenu.classList.contains('is-active')) {
      headerMenu.classList.remove('is-active');
    }
  })
})

accountLink.addEventListener('click', function() {
    if (headerMenu.classList.contains('is-active')) {
      menuBtn.classList.remove('is-active');
      headerMenu.classList.remove('is-active');
    }
})
