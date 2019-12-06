let staffGallery = document.querySelectorAll('.staff');
console.log(staffGallery)
staffGallery.forEach((item, i) => 
  item.querySelectorAll('[data-fancybox]').forEach(item => 
    item.setAttribute('data-fancybox', i)
  )
);