let stars = document.querySelectorAll('.rating li');
stars.forEach( (el) => {
  el.addEventListener('click', function() {
    let choiseRating = this.getAttribute('data-star');
    el.parentNode.setAttribute('data-stars', choiseRating);
  });
});