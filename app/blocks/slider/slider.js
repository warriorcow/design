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

// замена старых слайдеров
if ( document.querySelector('.center') ) {
  (function generateSynxSlider(){
    document.addEventListener('DOMContentLoaded', function(){
  
  
      var sliders = document.querySelectorAll('.center');
      function wrap(el, classElement) {
        classElement = classElement || 'wrapper';
        
        var wrapper = document.createElement('div');
        wrapper.classList.add(classElement);
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
      }
    
      sliders.forEach(function(el, i){
        var slidersItems = Array.from(el.children);

        slidersItems.forEach(function(el){
          el.removeAttribute('data-lightbox');
          el.setAttribute('data-fancybox', 'gallery-' + i);
        });


        var sliderBottom = document.createElement('div');
            sliderBottom.classList.add('center-bottom');
      
        wrap(el, 'slider-synx');
        el.after(sliderBottom);
      
      
        var sliderItems = el.querySelectorAll('.center img');
        sliderItems.forEach(function(el){
          var src = el.getAttribute('src');
          var sliderImg = document.createElement('img');
              sliderImg.setAttribute('src', src);
              sliderBottom.appendChild(sliderImg);
        });
      });

      $('.slider-synx').each(function(i){

        var sliderClassName = 'slider' + i;
        var sliderNavClassName = 'sliderNav' + i;

        this.children[0].classList.add(sliderClassName);
        this.children[1].classList.add(sliderNavClassName);

        var sliderClass = '.' + sliderClassName;
        var sliderNavClass = '.' + sliderNavClassName;

        $(sliderClass).slick({
          slidesToShow: 1,
          rows: false,  
          asNavFor: sliderNavClass,
          adaptiveHeight: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
              }
            }
          ]
        });

        $(sliderNavClass).slick({
          asNavFor: sliderClass,
          slidesToShow: 5,
          arrows: false,
          focusOnSelect: true,
          rows: false,
          infinite: false,
        });

      });
  
    });
  })();
}