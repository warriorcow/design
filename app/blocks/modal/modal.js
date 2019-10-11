
var oldName = $('[data-modal=service]').find('.form__title').text();

function showModal(e, thisName) {
  var _this = $('[data-modal='+e+']');
  console.log(e)
  // // Замена Title
  _this.find('.form__title').text(thisName);

  // // Появление модалки
  $('.modal, [data-modal='+e+']').css('display', 'flex').hide().fadeIn();

  //Клик креста
  $('.modal__close').click(function(){
    $(this).parents('.modal, [data-modal]').fadeOut();
    _this.find('.form__title').text(oldName);
  })

  //Клик вне модалки
  $(document).mouseup(function (e){
    if (!_this.is(e.target)
        && _this.has(e.target).length === 0) {
      _this.fadeOut().parents('.modal').fadeOut();
      _this.find('.form__title').text(oldName);
    }
  });
}

document.querySelector('.slider__have').addEventListener('click', function(){
  showModal(this.getAttribute('data-js'), this.previousElementSibling.textContent)
  console.log(oldName)
}) 
