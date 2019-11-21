$('[data-js="slider_catalog"]').slick({
  slidesToShow: 4,
  rows: false,
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    },{
      breakpoint: 640,
      settings: {
        slidesToShow: 2
      }
    }
  ]
})