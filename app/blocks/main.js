function thx(e) {
  $(e).fadeIn().css('display', 'flex').siblings().css({
    'opacity': '0',
    'visibility': 'hidden'
  });
}

var swiper = new Swiper('.swiper-container.category', {
  spaceBetween: 10,
  freeMode: true,
  direction: 'horizontal',
  mousewheel: true,
  resistanceRatio: 0.2,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 4,
    }
  }
});