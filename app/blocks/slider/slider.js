$('[data-js=fancybox]').fancybox();
$('[data-js=slider]').slick({
  rows: false,
  slidesToShow: 3,
  dots: true,
  arrows: true,
  responsive: [{
    breakpoint: 960,
    settings: {
      variableWidth: false,
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

