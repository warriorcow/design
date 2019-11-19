var searchBtn = $('[data-js=searchOpen]');
var searchForm = $('[data-js=searchOpen]').parent();

searchBtn.click(function(){
  console.log('search')
  searchForm.toggleClass('active');
});

$(document).mouseup(function (e){
  if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) {
    searchForm.removeClass('active');
  }
});