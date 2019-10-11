$('[data-js=fancybox]').fancybox();


$('[data-js=slider]').slick({
  centerMode: true,
  rows: false,
  slidesToShow: 1,
  variableWidth: true,
  dots: true,
  arrows: false,
  responsive: [{
    breakpoint: 640,
    settings: {
      variableWidth: false,
      centerMode: false
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
    console.log(minutes, seconds)
    
  });
  
  
})

