var swiper = new Swiper('.swiper-container.category', {
  spaceBetween: 10,
  freeMode: true,
  direction: 'horizontal',
  resistanceRatio: 0.2,
  slidesPerView: 'auto',
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  }
});

var telValidation = document.querySelectorAll('input[type=tel]');
telValidation.forEach(function(el){
  el.addEventListener('change', function() {
    console.log(el.value.length);
    if (el.value.length < 18) {
      this.setAttribute('placeholder', 'Введите полный номер');
      this.classList.add('error');
      this.value = '';
    } else {
      this.classList.remove('error');
    }
  });
});

var telInput = document.querySelectorAll('[type=tel]');
telInput.forEach(function(el){
  el.addEventListener('input', function(){
    if ( this.value == '8' ) {
      this.value = '+7';
    }
  });
});
$("[type=tel]").mask("+7 (000) 000-00 00", {
  translation: {
    Z: {
      pattern: /[0-9]/,
      optional:!0
    }
  },
});