let tabsBtn = document.querySelectorAll('.catalog__lang-btn');
let contentBlocks = document.querySelectorAll('.catalog__lang-block');

tabsBtn.forEach(tab => {
  tab.addEventListener('click', function(e) {
    let target = e.target;
    let targetPath = e.target.dataset.path;

    target.classList.add('is-active');

    for (let btn of tabsBtn) {
      if (btn.classList.contains('is-active') && target !== btn) {
        btn.classList.remove('is-active');
      }
    }

    contentBlocks.forEach(block => {
      block.classList.remove('is-active');
    });

    document.querySelector(`[data-target="${targetPath}"]`).classList.add('is-active');
  })
})
