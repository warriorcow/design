
$('#hamburger').change(function(){
  if ( $(this).prop("checked") == true ) {
    $('.header-menu').addClass('open');
  } else {
    $('.header-menu').removeClass('open');
  }
})

$('.header-menu__item a').click(function(){
  $(this).next().toggleClass('active');

})

$('.submenu__close a').click(function(){
  $(this).parents('.submenu').removeClass('active');
})

