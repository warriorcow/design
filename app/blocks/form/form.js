$('input[type=file]').change(function() {
  if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
  else $(this).prev().text('Выберите файлы');
});

function thx(e) {
  $(e).find('.thx').fadeIn().css('display', 'flex').siblings().css({
    'opacity': '0',
    'visibility': 'hidden'
  });
}