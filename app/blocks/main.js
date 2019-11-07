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

function mask() {
  var matrix = "+7 (___) ___ ____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });
};

var input = document.querySelectorAll("[type='tel']");
input.forEach(function(item){
  item.addEventListener("input", mask);
})