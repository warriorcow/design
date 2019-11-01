let sercicesWrap = document.querySelector('.services'),
    servicesItem = document.querySelectorAll('.services__item'),
    servicesBtn = document.querySelector('.services__more');

    function openServices() {
      let servicesItemHide = document.querySelectorAll('.services__item.hide');
      for (i = 0; i < 6; i++) {
        if ( servicesItemHide[i] ) {
          servicesItemHide[i].classList.remove('hide');
        }
      }
    }
    
    function removeBtn() {
      servicesItemHide = document.querySelectorAll('.services__item.hide');
      if ( servicesItemHide.length == 0) {
        servicesBtn.remove();
      }
    }


if (servicesBtn && servicesItem.length > 6) {
  servicesItem.forEach(function(item, i){
    if (i > 5) {
      item.classList.add('hide');
    }
  });
  
  servicesBtn.addEventListener('click', function(e){
    openServices();
    removeBtn();
  })
} else {
  if (servicesBtn) {
    removeBtn();
  }
}

