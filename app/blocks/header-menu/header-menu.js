let hamburder = document.querySelector('#hamburger'),
    menu = document.querySelector('.header-menu'),
    submenuClose = document.querySelectorAll('.submenu__close');

hamburder.addEventListener('change', function() {
  if ( this.checked ) {
    menu.classList.add('open');
  } else {
    menu.classList.remove('open');
  }
});

$('.header-menu__item').click(function(e){
  if (e.target == this && !!this.querySelector('.submenu')) {
    this.querySelector('.submenu').classList.toggle('active');
  }
})

submenuClose.forEach( item => item.addEventListener('click', function() {
  this.parentElement.classList.remove('active');
}));

// $('.submenu__close a').click(function(){
//   $(this).parents('.submenu').removeClass('active');
//   console.log('back')
// })

