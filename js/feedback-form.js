let phoneInput = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999) 999-99-99");
im.mask(phoneInput);

new JustValidate('.feedback__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 25
    }, 
    tel: {
      required: true,
      function: (name, value) => {
        const phone = phoneInput.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10
      }
    }
  }, 
  colorWrong: 'red',
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Необходимо ввести больше двух символов',
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Введен некорректный телефон',
    }
  },
})