"use strict";

var swiper = new Swiper('.swiper-container.category', {
  spaceBetween: 10,
  freeMode: true,
  direction: 'horizontal',
  resistanceRatio: 0.2,
  slidesPerView: 'auto',
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  }
});
var telValidation = document.querySelectorAll('input[type=tel]');
telValidation.forEach(function (el) {
  el.addEventListener('change', function () {
    console.log(el.value.length);

    if (el.value.length < 18) {
      this.setAttribute('placeholder', 'Введите полный номер');
      this.classList.add('error');
      this.value = '';
    } else {
      this.classList.remove('error');
    }
  });
});
var telInput = document.querySelectorAll('[type=tel]');
telInput.forEach(function (el) {
  el.addEventListener('input', function () {
    if (this.value == '8') {
      this.value = '+7';
    }
  });
});
$("[type=tel]").mask("+7 (000) 000-00 00", {
  translation: {
    Z: {
      pattern: /[0-9]/,
      optional: !0
    }
  }
});
$('input[type=file]').change(function () {
  if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);else $(this).prev().text('Выберите файлы');
});

function thx(e) {
  $(e).find('.thx').fadeIn().css('display', 'flex').siblings().css({
    'opacity': '0',
    'visibility': 'hidden'
  });
}

var hamburder = document.querySelector('#hamburger'),
    menu = document.querySelector('.header-menu'),
    submenuButton = document.querySelectorAll('.header-menu__item'),
    submenuClose = document.querySelectorAll('.submenu__close');
hamburder.addEventListener('change', function () {
  if (this.checked) {
    menu.classList.add('open');
  } else {
    menu.classList.remove('open');
  }
});
submenuButton.forEach(function (item) {
  return item.addEventListener('click', function (e) {
    if (e.target == this && !!this.querySelector('.submenu')) {
      this.querySelector('.submenu').classList.toggle('active');
    }
  });
});
submenuClose.forEach(function (item) {
  return item.addEventListener('click', function () {
    this.parentElement.classList.remove('active');
  });
});
var oldName = $('[data-modal=service]').find('.form__title').text();

function showModal(e, thisName) {
  var _this = $('[data-modal=' + e + ']');

  _this.addClass('open'); // Появление модалки


  $('.modal, [data-modal=' + e + ']').css({
    opacity: 0,
    display: 'flex'
  }).animate({
    opacity: 1
  }, 300);

  if (e == 'service') {
    // Замена Title / Value Name
    _this.find('.form__title').text(thisName);

    _this.find('.form__name').val(thisName);
  } // Клик креста


  $('.modal__close').click(function () {
    $(this).parents('.modal, [data-modal]').fadeOut();

    _this.removeClass('open');

    setTimeout(function () {
      _this.find('.form__title').text(oldName);

      _this.find('.form__name').attr('value', '');
    }, 1000);
  }); // Клик вне модалки

  $(document).mousedown(function (e) {
    if (!_this.is(e.target) && _this.has(e.target).length === 0 && _this.hasClass('open')) {
      _this.fadeOut().parents('.modal').fadeOut();

      _this.removeClass('open');

      setTimeout(function () {
        _this.find('.form__title').text(oldName);

        _this.find('.form__name').attr('value', '');
      }, 1000);
    }
  });
}

$('.btn[data-js]').not('.btn[data-js=fancybox]').each(function () {
  $(this).click(function (e) {
    e.preventDefault();
    showModal(this.getAttribute('data-js'), this.previousElementSibling.textContent);
  });
});
var stars = document.querySelectorAll('.rating li');
stars.forEach(function (el) {
  el.addEventListener('click', function () {
    var choiseRating = this.getAttribute('data-star');
    el.parentNode.setAttribute('data-stars', choiseRating);
  });
});
var searchBtn = $('[data-js=searchOpen]');
var searchForm = $('[data-js=searchOpen]').parent();
searchBtn.click(function () {
  console.log('search');
  searchForm.toggleClass('active');
});
$(document).mouseup(function (e) {
  if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) {
    searchForm.removeClass('active');
  }
});
var sercicesWrap = document.querySelector('.services'),
    servicesItem = document.querySelectorAll('.services__item'),
    servicesBtn = document.querySelector('.services__more');

function openServices() {
  var servicesItemHide = document.querySelectorAll('.services__item.hide');

  for (var i = 0; i < 6; i++) {
    if (servicesItemHide[i]) {
      servicesItemHide[i].classList.remove('hide');
    }
  }
}

function removeBtn() {
  var servicesItemHide = document.querySelectorAll('.services__item.hide');

  if (servicesItemHide.length == 0) {
    servicesBtn.remove();
  }
}

if (servicesBtn && servicesItem.length > 6) {
  servicesItem.forEach(function (item, i) {
    if (i > 5) {
      item.classList.add('hide');
    }
  });
  servicesBtn.addEventListener('click', function (e) {
    openServices();
    removeBtn();
  });
} else {
  if (servicesBtn) {
    removeBtn();
  }
}

$.fancybox.defaults.backFocus = false;
var fancySlider = document.querySelectorAll('.slider_fancybox');
fancySlider.forEach(function (el, i) {
  var itemFancy = el.querySelectorAll('a');

  for (var j = 0; j < itemFancy.length; j++) {
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
$('.audio').each(function () {
  this.addEventListener('loadedmetadata', function () {
    var _this = this.duration;
    var minutes = Math.floor(_this / 60) + ' ';
    var seconds = Math.floor(_this - minutes * 60) + ' ';
    $(this).parent().find('.min').html(minutes);
    $(this).parent().find('.sec').html(seconds);
  });
}); // замена старых слайдеров

if (document.querySelector('.center')) {
  (function generateSynxSlider() {
    document.addEventListener('DOMContentLoaded', function () {
      var sliders = document.querySelectorAll('.center');

      function wrap(el, classElement) {
        classElement = classElement || 'wrapper';
        var wrapper = document.createElement('div');
        wrapper.classList.add(classElement);
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
      }

      sliders.forEach(function (el, i) {
        var slidersItems = Array.from(el.children);
        slidersItems.forEach(function (el) {
          el.removeAttribute('data-lightbox');
          el.setAttribute('data-fancybox', 'gallery-' + i);
        });
        var sliderBottom = document.createElement('div');
        sliderBottom.classList.add('center-bottom');
        wrap(el, 'slider-synx');
        el.after(sliderBottom);
        var sliderItems = el.querySelectorAll('.center img');
        sliderItems.forEach(function (el) {
          var src = el.getAttribute('src');
          var sliderImg = document.createElement('img');
          sliderImg.setAttribute('src', src);
          sliderBottom.appendChild(sliderImg);
        });
      });
      $('.slider-synx').each(function (i) {
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
          responsive: [{
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        });
        $(sliderNavClass).slick({
          asNavFor: sliderClass,
          slidesToShow: 5,
          arrows: false,
          focusOnSelect: true,
          rows: false,
          infinite: false
        });
      });
    });
  })();
}

var staffGallery = document.querySelectorAll('.staff');
console.log(staffGallery);
staffGallery.forEach(function (item, i) {
  return item.querySelectorAll('[data-fancybox]').forEach(function (item) {
    return item.setAttribute('data-fancybox', i);
  });
});
$('[data-js="slider_catalog"]').slick({
  slidesToShow: 4,
  rows: false,
  dots: true,
  infinite: false,
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 2
    }
  }]
});