
$('#hamburger').change(function(){
  if ( $(this).prop("checked") == true ) {
    $('.menu').addClass('open');
  } else {
    $('.menu').removeClass('open');
  }
})

$('.menu__item a').click(function(){
  $(this).next().toggleClass('active');

})

$('.submenu__close a').click(function(){
  $(this).parents('.submenu').removeClass('active');
})

