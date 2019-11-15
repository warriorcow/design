fancySlider = document.querySelectorAll('.slider_fancybox');
fancySlider.forEach(function(el, i){
  let itemFancy = el.querySelectorAll('a');
  for ( let j = 0; j < itemFancy.length; j++ ) {
    itemFancy[j].setAttribute('data-fancybox', i);
  }
});


$('[data-js=slider]').slick({
  rows: false,
  swipeToSlide: true,
  // centerMode: true,
  slidesToShow: 3,
  dots: true,
  arrows: true,
  infinite: false,
  responsive: [{
    breakpoint: 960,
    settings: {
      slidesToShow: 1,
      adaptiveHeight: true
    }
  }]
});



$('.audio').each(function(){
  this.addEventListener('loadedmetadata', function() {
    var _this = this.duration;
    var minutes = Math.floor(_this / 60) + ' ';
    var seconds = Math.floor(_this - minutes * 60) + ' ';
    
    $(this).parent().find('.min').html(minutes);
    $(this).parent().find('.sec').html(seconds);
    
  });
});

