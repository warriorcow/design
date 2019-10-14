var oldName = $('[data-modal=service]').find('.form__title').text();

function showModal(e, thisName) {
  var _this = $('[data-modal='+e+']');
  _this.addClass('open');
    // Появление модалки
    $('.modal, [data-modal='+e+']').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 300);

  if(e == 'service') {
    // Замена Title / Value Name
    _this.find('.form__title').text(thisName);
    _this.find('.form__name').val(thisName);
  }

  // Клик креста
  $('.modal__close').click(function(){
    $(this).parents('.modal, [data-modal]').fadeOut();
    _this.removeClass('open');
    setTimeout (function(){
      _this.find('.form__title').text(oldName);
      _this.find('.form__name').attr('value', '');
    }, 1000);
  })

  // Клик вне модалки
  $(document).mouseup(function (e){
    if (!_this.is(e.target)
        && _this.has(e.target).length === 0 && _this.hasClass('open')) {
      _this.fadeOut().parents('.modal').fadeOut();
      _this.removeClass('open');
      setTimeout (function(){
        _this.find('.form__title').text(oldName);
        _this.find('.form__name').attr('value', '');
      }, 1000);
    }
  });
}

$('.btn[data-js]').each(function(){
  $(this).click(function(){
    showModal(this.getAttribute('data-js'), this.previousElementSibling.textContent)
  }) 
})