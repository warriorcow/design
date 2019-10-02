$('[data=fancybox]').fancybox();


$('[data=slider]').slick({
  centerMode: true,
  rows: false,
  slidesToShow: 1,
  variableWidth: true,
  dots: true,
  arrows: false,
  // infinite: false,
  responsive: [{
    breakpoint: 1080,
    settings: {
      variableWidth: false,
      centerMode: false,
      adaptiveHeight: true
    }
  }]
});


$('.audio').each(function(){
  // let audioCurrentTime = this;

  this.addEventListener('loadedmetadata', function() {
    var _this = this.duration;
    var minutes = Math.floor(_this / 60) + ' ';
    var seconds = Math.floor(_this - minutes * 60) + ' ';
    
    $(this).parent().find('.min').html(minutes);
    $(this).parent().find('.sec').html(seconds);
    console.log(minutes, seconds)
    
  });
  
  
})

