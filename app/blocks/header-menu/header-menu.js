let hamburder = document.querySelector('#hamburger'),
    menu = document.querySelector('.header-menu'),
    submenuButton = document.querySelectorAll('.header-menu__item'),
    submenuClose = document.querySelectorAll('.submenu__close');

hamburder.addEventListener('change', function() {
  if ( this.checked ) {
    menu.classList.add('open');
  } else {
    menu.classList.remove('open');
  }
});

submenuButton.forEach( item => item.addEventListener('click', function(e) {
  if (e.target == this && !!this.querySelector('.submenu')) {
    this.querySelector('.submenu').classList.toggle('active');
  }
}));

submenuClose.forEach( item => item.addEventListener('click', function() {
  this.parentElement.classList.remove('active');
}));

