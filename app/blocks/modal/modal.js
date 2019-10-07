$('.modal__close').click(function(){
  $(this).parents('.modal').fadeOut();
})

function showModal(e) {
  $('.modal, [data-modal='+e+']').css('display', 'flex').hide().fadeIn();
}

