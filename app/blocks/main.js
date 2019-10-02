function thx(e) {
  $(e).fadeIn().css('display', 'flex').siblings().css({
    'opacity': '0',
    'visibility': 'hidden'
  });
}