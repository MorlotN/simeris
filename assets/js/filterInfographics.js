$(document).ready(function() {
  $('.Label').click(function(event) {
    console.log('click', event);
    $('.Label--active').removeClass('Label--active');
    $(event.target).addClass('Label--active');

    if ( event.target.innerText === 'Tout') {
      $('.Card').removeClass('Card--hidden');
    } else {
      $(`.Card:contains(${event.target.innerText})`).removeClass('Card--hidden');
      $(`.Card:not(:contains(${event.target.innerText}))`).addClass('Card--hidden');
    }
  });
});
