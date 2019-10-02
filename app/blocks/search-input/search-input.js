var searchBtn = $('[searchOpen]');
var searchForm = $('[searchOpen]').parent();

searchBtn.click(function(){
  searchForm.toggleClass('active');
});

$(document).mouseup(function (e){
  if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) {
    searchForm.removeClass('active');
  }
});