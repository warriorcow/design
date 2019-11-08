function thx(e) {
  e.find('.thx').fadeIn().css('display', 'flex').siblings().css({
    'opacity': '0',
    'visibility': 'hidden'
  });
}


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

$("[type=tel]").mask("+7 (000) 000-00 00",{translation:{Z:{pattern:/[0-9]/,optional:!0}}});