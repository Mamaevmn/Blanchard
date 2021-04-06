const multiArtstyleSelectBar = () => {
  let customScroll = document.querySelectorAll('.select__scroll-block');
  
  customScroll.forEach(bar => {
    const selectsBar = new SimpleBar(bar, {
      scrollbarMaxSize: 28
    });
  })
}

multiArtstyleSelectBar ();
