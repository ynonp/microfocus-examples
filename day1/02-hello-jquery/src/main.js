import $ from 'jquery';

$('form').on('submit', function (ev) {
  alert('Searching...');
  ev.preventDefault();
});

$('#btnSecret').on('click', function () {
  $('#secret').text('Secret is ninja');
});

$('.game').on('click', 'button', function (ev) {
  const $btn = $(ev.target);
  const val = $btn.text();
  $btn.text(Number(val) + 1);
});

$('#btnAdd').on('click', function () {
  $('.game').append('<button>0</button>');
});








